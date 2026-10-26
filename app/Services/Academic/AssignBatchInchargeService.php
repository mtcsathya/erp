<?php

namespace App\Services\Academic;

use App\Enums\Employee\Type as EmployeeType;
use App\Helpers\CalHelper;
use App\Models\Academic\Batch;
use App\Models\Employee\Employee;
use App\Models\Incharge;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AssignBatchInchargeService
{
    public function preRequisite(Request $request)
    {
        $date = $request->date;

        if (!CalHelper::validateDate($date)) {
            $date = today()->toDateString();
        }

        $batches = Batch::query()
            ->select('batches.id as batch_id', 'courses.id as course_id', 'batches.uuid', 'batches.name as batch_name', 'courses.name as course_name')
            ->join('courses', 'batches.course_id', '=', 'courses.id')
            ->join('divisions', 'courses.division_id', '=', 'divisions.id')
            ->where('divisions.period_id', auth()->user()->current_period_id)
            ->get();

        $batchIncharges = Incharge::query()
            ->select('id', 'uuid', 'model_id as batch_id', 'employee_id', 'start_date', 'end_date')
            ->where('model_type', 'Batch')
            ->whereIn('model_id', $batches->pluck('batch_id'))
            ->where('start_date', '<=', $date)
            ->where(function ($q) use ($date) {
                $q->whereNull('end_date')
                    ->orWhere('end_date', '>=', $date);
            })
            ->get();

        $employees = Employee::query()
            ->select('employees.id', 'employees.uuid', \DB::raw('REGEXP_REPLACE(CONCAT_WS(" ", first_name, middle_name, third_name, last_name), "[[:space:]]+", " ") as name'), 'employees.code_number', 'contacts.photo', 'departments.name as department_name', 'designations.name as designation_name')
            ->join('contacts', 'employees.contact_id', '=', 'contacts.id')
            ->leftJoin('employee_records', function ($join) use ($date) {
                $join->on('employees.id', '=', 'employee_records.employee_id')
                    ->on('start_date', '=', \DB::raw("(select start_date from employee_records where employees.id = employee_records.employee_id and start_date <= '".$date."' order by start_date desc limit 1)"))
                    ->leftJoin('departments', 'employee_records.department_id', '=', 'departments.id')
                    ->leftJoin('designations', 'employee_records.designation_id', '=', 'designations.id');
            })
            ->where('employees.joining_date', '<=', $date)
            ->where(function ($q) use ($date) {
                $q->whereNull('employees.leaving_date')
                    ->orWhere('employees.leaving_date', '>=', $date);
            })
            ->where('employees.team_id', auth()->user()->current_team_id)
            ->where('employees.type', EmployeeType::TEACHING)
            ->get();

        $batches = $batches->map(function ($batch) use ($batchIncharges, $employees) {
            $incharges = $batchIncharges->where('batch_id', $batch->batch_id)->map(function ($incharge) use ($employees) {
                $employee = $employees->firstWhere('id', $incharge->employee_id);

                return [
                    'uuid' => $incharge->uuid,
                    'date' => $incharge->start_date,
                    'end_date' => $incharge->end_date,
                    'employee' => [
                        'uuid' => $employee?->uuid,
                        'name' => $employee?->name,
                        'code_number' => $employee?->code_number,
                        'photo' => $employee?->photo_url,
                        'department_name' => $employee?->department_name,
                        'designation_name' => $employee?->designation_name,
                    ]
                ];
            })->values()->toArray();

            return [
                'uuid' => $batch->uuid,
                'name' => $batch->course_name . ' ' . $batch->batch_name,
                'incharges' => $incharges,
            ];
        });

        $employees = $employees->map(function ($employee) {
            return [
                'uuid' => $employee->uuid,
                'name' => $employee->name,
                'code_number' => $employee->code_number,
                'photo' => $employee->photo_url,
                'department_name' => $employee->department_name,
                'designation_name' => $employee->designation_name
            ];
        });

        return compact('batches', 'employees', 'date');
    }

    public function assign(Request $request): void
    {
        $request->validate([
            'date' => 'required|date_format:Y-m-d',
            'new_incharge' => 'array',
            'removed_incharge' => 'array',
        ]);

        $date = $request->date;

        $newIncharges = $request->new_incharge;
        $removedIncharges = $request->removed_incharge;

        $newEmployees = collect($newIncharges)->map(function ($item) {
            return Arr::get($item, 'employee.uuid');
        })->unique()->values()->toArray();

        $removedEmployees = collect($removedIncharges)->map(function ($item) {
            return Arr::get($item, 'employee.uuid');
        })->unique()->values()->toArray();

        $employeeUuids = array_merge($newEmployees, $removedEmployees);

        $employees = Employee::query()
            ->byTeam()
            ->whereIn('employees.uuid', $employeeUuids)
            ->where('employees.joining_date', '<=', $date)
            ->where(function ($q) use ($date) {
                $q->whereNull('employees.leaving_date')
                    ->orWhere('employees.leaving_date', '>=', $date);
            })
            ->get();

        $newBatches = collect($newIncharges)->map(function ($item) {
            return Arr::get($item, 'entity_uuid');
        })->unique()->values()->toArray();

        $removedBatches = collect($removedIncharges)->map(function ($item) {
            return Arr::get($item, 'entity_uuid');
        })->unique()->values()->toArray();

        $batchUuids = array_merge($newBatches, $removedBatches);

        $batches = Batch::query()
            ->byPeriod()
            ->whereIn('batches.uuid', $batchUuids)
            ->get();

        $existingBatchIncharges = Incharge::query()
            ->where('model_type', 'Batch')
            ->whereIn('model_id', $batches->pluck('id'))
            ->get();

        \DB::beginTransaction();

        $insertData = [];
        foreach ($newIncharges as $newIncharge) {
            $batchUuid = Arr::get($newIncharge, 'entity_uuid');
            $employeeUuid = Arr::get($newIncharge, 'employee.uuid');

            $batch = $batches->firstWhere('uuid', $batchUuid);
            $employee = $employees->firstWhere('uuid', $employeeUuid);

            $existingBatchIncharge = $existingBatchIncharges->where('model_id', $batch?->id)
                ->where('employee_id', $employee?->id)->first();

            if ($existingBatchIncharge && $existingBatchIncharge->start_date->value == $date) {
                continue;
            }

            if ($existingBatchIncharge && $existingBatchIncharge->start_date->value < $date && !$existingBatchIncharge->end_date->value) {
                continue;
            }

            if ($existingBatchIncharge && $existingBatchIncharge->start_date->value > $date && !$existingBatchIncharge->end_date->value) {
                $existingBatchIncharge->start_date = $date;
                $existingBatchIncharge->save();
                continue;
            }

            if ($existingBatchIncharge && $existingBatchIncharge->start_date->value > $date && $existingBatchIncharge->end_date->value && $existingBatchIncharge->end_date->value >= $date) {
                continue;
            }

            $insertData[] = [
                'uuid' => (string) Str::uuid(),
                'model_type' => 'Batch',
                'model_id' => $batch?->id,
                'employee_id' => $employee?->id,
                'start_date' => $date,
                'created_at' => now()->toDateString(),
            ];
        }

        if (count($insertData)) {
            Incharge::insert($insertData);
        }

        foreach ($removedIncharges as $removedIncharge) {
            $batchUuid = Arr::get($removedIncharge, 'entity_uuid');
            $employeeUuid = Arr::get($removedIncharge, 'employee.uuid');

            $batch = $batches->firstWhere('uuid', $batchUuid);
            $employee = $employees->firstWhere('uuid', $employeeUuid);

            $incharge = Incharge::query()
                ->where('model_type', 'Batch')
                ->where('model_id', $batch?->id)
                ->where('employee_id', $employee?->id)
                ->where('start_date', '<=', $date)
                ->where(function ($q) use ($date) {
                    $q->whereNull('end_date')
                        ->orWhere('end_date', '>=', $date);
                })->first();

            if ($incharge) {
                $incharge->end_date = $date;
                $incharge->save();
            }
        }

        \DB::commit();
    }
}

<?php

namespace App\Services\Academic;

use App\Enums\Employee\Type as EmployeeType;
use App\Helpers\CalHelper;
use App\Models\Academic\Program;
use App\Models\Employee\Employee;
use App\Models\Incharge;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AssignProgramInchargeService
{
    public function preRequisite(Request $request)
    {
        $date = $request->date;

        if (!CalHelper::validateDate($date)) {
            $date = today()->toDateString();
        }

        $programs = Program::query()
            ->select('programs.id as program_id', 'programs.uuid', 'programs.name as program_name')
            ->where('programs.team_id', auth()->user()->current_team_id)
            ->get();

        $programIncharges = Incharge::query()
            ->select('id', 'uuid', 'model_id as program_id', 'employee_id', 'start_date', 'end_date')
            ->where('model_type', 'Program')
            ->whereIn('model_id', $programs->pluck('program_id'))
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

        $programs = $programs->map(function ($program) use ($programIncharges, $employees) {
            $incharges = $programIncharges->where('program_id', $program->program_id)->map(function ($incharge) use ($employees) {
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
                'uuid' => $program->uuid,
                'name' => $program->program_name,
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

        return compact('programs', 'employees', 'date');
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

        $newPrograms = collect($newIncharges)->map(function ($item) {
            return Arr::get($item, 'entity_uuid');
        })->unique()->values()->toArray();

        $removedPrograms = collect($removedIncharges)->map(function ($item) {
            return Arr::get($item, 'entity_uuid');
        })->unique()->values()->toArray();

        $programUuids = array_merge($newPrograms, $removedPrograms);

        $programs = Program::query()
            ->whereIn('programs.uuid', $programUuids)
            ->get();

        $existingProgramIncharges = Incharge::query()
            ->where('model_type', 'Program')
            ->whereIn('model_id', $programs->pluck('id'))
            ->get();

        \DB::beginTransaction();

        $insertData = [];
        foreach ($newIncharges as $newIncharge) {
            $programUuid = Arr::get($newIncharge, 'entity_uuid');
            $employeeUuid = Arr::get($newIncharge, 'employee.uuid');

            $program = $programs->firstWhere('uuid', $programUuid);
            $employee = $employees->firstWhere('uuid', $employeeUuid);

            $existingProgramIncharge = $existingProgramIncharges->where('model_id', $program?->id)
                ->where('employee_id', $employee?->id)->first();

            if ($existingProgramIncharge && $existingProgramIncharge->start_date->value == $date) {
                continue;
            }

            if ($existingProgramIncharge && $existingProgramIncharge->start_date->value < $date && !$existingProgramIncharge->end_date->value) {
                continue;
            }

            if ($existingProgramIncharge && $existingProgramIncharge->start_date->value > $date && !$existingProgramIncharge->end_date->value) {
                $existingProgramIncharge->start_date = $date;
                $existingProgramIncharge->save();
                continue;
            }

            if ($existingProgramIncharge && $existingProgramIncharge->start_date->value > $date && $existingProgramIncharge->end_date->value && $existingProgramIncharge->end_date->value >= $date) {
                continue;
            }

            $insertData[] = [
                'uuid' => (string) Str::uuid(),
                'model_type' => 'Program',
                'model_id' => $program?->id,
                'employee_id' => $employee?->id,
                'start_date' => $date,
                'created_at' => now()->toDateString(),
            ];
        }

        if (count($insertData)) {
            Incharge::insert($insertData);
        }

        foreach ($removedIncharges as $removedIncharge) {
            $courseUuid = Arr::get($removedIncharge, 'entity_uuid');
            $employeeUuid = Arr::get($removedIncharge, 'employee.uuid');

            $program = $programs->firstWhere('uuid', $programUuid);
            $employee = $employees->firstWhere('uuid', $employeeUuid);

            $incharge = Incharge::query()
                ->where('model_type', 'Program')
                ->where('model_id', $program?->id)
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

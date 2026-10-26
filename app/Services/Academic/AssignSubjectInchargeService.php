<?php

namespace App\Services\Academic;

use App\Enums\Employee\Type as EmployeeType;
use App\Helpers\CalHelper;
use App\Models\Academic\Batch;
use App\Models\Academic\Subject;
use App\Models\Academic\SubjectRecord;
use App\Models\Employee\Employee;
use App\Models\Incharge;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AssignSubjectInchargeService
{
    public function preRequisite(Request $request)
    {
        $date = $request->date;
        $batch = $request->batch;

        if (!CalHelper::validateDate($date)) {
            $date = today()->toDateString();
        }

        $subjectRecords = collect();

        if ($batch) {
            $batch = Batch::query()
                ->byPeriod()
                ->filterAccessible()
                ->where('batches.uuid', $batch)
                ->getOrFail(trans('academic.batch.batch'));

            $subjectRecords = SubjectRecord::query()
                ->select('subject_records.subject_id')
                ->where(function ($q) use ($batch) {
                    $q->where('subject_records.batch_id', $batch->id)
                        ->orWhere('subject_records.course_id', $batch->course_id);
                })
                ->get();
        }

        $subjects = Subject::query()
            ->select('subjects.id as subject_id', 'subjects.uuid', 'subjects.name as subject_name', 'subjects.code as subject_code')
            ->where('subjects.period_id', auth()->user()->current_period_id)
            ->when($request->batch, function ($q) use ($subjectRecords) {
                $q->whereIn('subjects.id', $subjectRecords->pluck('subject_id'));
            })
            ->get();

        $subjectIncharges = Incharge::query()
            ->select('id', 'uuid', 'model_id as subject_id', 'employee_id', 'start_date', 'end_date')
            ->where('model_type', 'Subject')
            ->whereIn('model_id', $subjects->pluck('subject_id'))
            ->when($request->batch, function ($q) use ($batch) {
                $q->where('detail_type', 'Batch')
                    ->where('detail_id', $batch->id);
            }, function ($q) {
                $q->whereNull('detail_type');
            })
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

        $subjects = $subjects->map(function ($subject) use ($subjectIncharges, $employees) {
            $incharges = $subjectIncharges->where('subject_id', $subject->subject_id)->map(function ($incharge) use ($employees) {
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
                'uuid' => $subject->uuid,
                'name' => $subject->subject_name,
                'code' => $subject->subject_code,
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

        return compact('subjects', 'employees', 'date');
    }

    public function assign(Request $request): void
    {
        $request->validate([
            'date' => 'required|date_format:Y-m-d',
            'batch' => 'nullable|uuid',
            'new_incharge' => 'array',
            'removed_incharge' => 'array',
        ]);

        $date = $request->date;
        $batch = $request->batch;

        if ($batch) {
            $batch = Batch::query()
                ->byPeriod()
                ->filterAccessible()
                ->where('batches.uuid', $batch)
                ->getOrFail(trans('academic.batch.batch'));
        }

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

        $newSubjects = collect($newIncharges)->map(function ($item) {
            return Arr::get($item, 'entity_uuid');
        })->unique()->values()->toArray();

        $removedSubjects = collect($removedIncharges)->map(function ($item) {
            return Arr::get($item, 'entity_uuid');
        })->unique()->values()->toArray();

        $subjectUuids = array_merge($newSubjects, $removedSubjects);

        $subjects = Subject::query()
            ->byPeriod()
            ->whereIn('subjects.uuid', $subjectUuids)
            ->get();

        \DB::beginTransaction();

        $insertData = [];
        foreach ($newIncharges as $newIncharge) {
            $courseUuid = Arr::get($newIncharge, 'entity_uuid');
            $employeeUuid = Arr::get($newIncharge, 'employee.uuid');

            $subject = $subjects->firstWhere('uuid', $courseUuid);
            $employee = $employees->firstWhere('uuid', $employeeUuid);

            $insertData[] = [
                'uuid' => (string) Str::uuid(),
                'model_type' => 'Subject',
                'model_id' => $subject?->id,
                'detail_type' => $request->batch ? 'Batch' : null,
                'detail_id' => $request->batch ? $batch->id : null,
                'employee_id' => $employee?->id,
                'start_date' => $date,
                'created_at' => now()->toDateString(),
            ];
        }

        if (count($insertData)) {
            Incharge::insert($insertData);
        }

        foreach ($removedIncharges as $removedIncharge) {
            $subjectUuid = Arr::get($removedIncharge, 'entity_uuid');
            $employeeUuid = Arr::get($removedIncharge, 'employee.uuid');

            $subject = $subjects->firstWhere('uuid', $subjectUuid);
            $employee = $employees->firstWhere('uuid', $employeeUuid);

            $incharge = Incharge::query()
                ->where('model_type', 'Subject')
                ->where('model_id', $subject?->id)
                ->when($request->batch, function ($q) use ($batch) {
                    $q->where('detail_type', 'Batch')
                        ->where('detail_id', $batch->id);
                })
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

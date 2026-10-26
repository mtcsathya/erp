<?php

namespace App\Services\Academic;

use App\Enums\Employee\Type as EmployeeType;
use App\Helpers\CalHelper;
use App\Models\Academic\Course;
use App\Models\Employee\Employee;
use App\Models\Incharge;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AssignCourseInchargeService
{
    public function preRequisite(Request $request)
    {
        $date = $request->date;

        if (!CalHelper::validateDate($date)) {
            $date = today()->toDateString();
        }

        $courses = Course::query()
            ->select('courses.id as course_id', 'courses.uuid', 'courses.name as course_name')
            ->join('divisions', 'courses.division_id', '=', 'divisions.id')
            ->where('divisions.period_id', auth()->user()->current_period_id)
            ->get();

        $courseIncharges = Incharge::query()
            ->select('id', 'uuid', 'model_id as course_id', 'employee_id', 'start_date', 'end_date')
            ->where('model_type', 'Course')
            ->whereIn('model_id', $courses->pluck('course_id'))
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

        $courses = $courses->map(function ($course) use ($courseIncharges, $employees) {
            $incharges = $courseIncharges->where('course_id', $course->course_id)->map(function ($incharge) use ($employees) {
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
                'uuid' => $course->uuid,
                'name' => $course->course_name,
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

        return compact('courses', 'employees', 'date');
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

        $newCourses = collect($newIncharges)->map(function ($item) {
            return Arr::get($item, 'entity_uuid');
        })->unique()->values()->toArray();

        $removedCourses = collect($removedIncharges)->map(function ($item) {
            return Arr::get($item, 'entity_uuid');
        })->unique()->values()->toArray();

        $courseUuids = array_merge($newCourses, $removedCourses);

        $courses = Course::query()
            ->byPeriod()
            ->whereIn('courses.uuid', $courseUuids)
            ->get();

        $existingCourseIncharges = Incharge::query()
            ->where('model_type', 'Course')
            ->whereIn('model_id', $courses->pluck('id'))
            ->get();

        \DB::beginTransaction();

        $insertData = [];
        foreach ($newIncharges as $newIncharge) {
            $courseUuid = Arr::get($newIncharge, 'entity_uuid');
            $employeeUuid = Arr::get($newIncharge, 'employee.uuid');

            $course = $courses->firstWhere('uuid', $courseUuid);
            $employee = $employees->firstWhere('uuid', $employeeUuid);

            $existingCourseIncharge = $existingCourseIncharges->where('model_id', $course?->id)
                ->where('employee_id', $employee?->id)->first();

            if ($existingCourseIncharge && $existingCourseIncharge->start_date->value == $date) {
                continue;
            }

            if ($existingCourseIncharge && $existingCourseIncharge->start_date->value < $date && !$existingCourseIncharge->end_date->value) {
                continue;
            }

            if ($existingCourseIncharge && $existingCourseIncharge->start_date->value > $date && !$existingCourseIncharge->end_date->value) {
                $existingCourseIncharge->start_date = $date;
                $existingCourseIncharge->save();
                continue;
            }

            if ($existingCourseIncharge && $existingCourseIncharge->start_date->value > $date && $existingCourseIncharge->end_date->value && $existingCourseIncharge->end_date->value >= $date) {
                continue;
            }

            $insertData[] = [
                'uuid' => (string) Str::uuid(),
                'model_type' => 'Course',
                'model_id' => $course?->id,
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

            $course = $courses->firstWhere('uuid', $courseUuid);
            $employee = $employees->firstWhere('uuid', $employeeUuid);

            $incharge = Incharge::query()
                ->where('model_type', 'Course')
                ->where('model_id', $course?->id)
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

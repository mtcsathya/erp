<?php

namespace App\Imports\Employee;

use App\Concerns\ItemImport;
use App\Models\Contact;
use App\Models\Employee\Employee;
use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\HeadingRowImport;

class EmployeeBulkUpdateUserAccount implements ToCollection, WithHeadingRow
{
    use ItemImport;

    protected $limit = 1000;

    public function collection(Collection $rows)
    {
        $this->validateHeadings($rows);

        $headings = (new HeadingRowImport)->toArray(request()->file('file'))[0][0];

        if (! auth()->user()->hasRole('admin')) {
            throw ValidationException::withMessages(['message' => trans('user.errors.permission_denied')]);
        }

        if (count($rows) > $this->limit) {
            throw ValidationException::withMessages(['message' => trans('general.errors.max_import_limit_crossed', ['attribute' => $this->limit])]);
        }

        $logFile = $this->getLogFile('employee');

        [$errors, $rows] = $this->validate($rows);

        $this->checkForErrors('employee', $errors);

        if (! request()->boolean('validate') && ! \Storage::disk('local')->exists($logFile)) {
            $this->import($rows);
        }
    }

    private function import(Collection $rows)
    {
        activity()->disableLogging();

        \DB::beginTransaction();

        $contacts = Contact::query()
            ->byTeam()
            ->whereIn('id', $rows->pluck('contact_id'))
            ->get();

        $users = User::query()
            ->whereIn('id', $contacts->pluck('user_id'))
            ->get();

        foreach ($rows as $row) {
            $contact = $contacts->firstWhere('id', Arr::get($row, 'contact_id'));

            $password = Arr::get($row, 'password');

            $user = $users->firstWhere('id', $contact->user_id);
            $user->password = bcrypt($password);
            $user->save();
        }

        \DB::commit();

        activity()->enableLogging();
    }

    private function validate(Collection $rows)
    {
        $employees = Employee::query()
            ->summary()
            ->get();

        $users = User::query()
            ->whereIn('id', $employees->pluck('user_id'))
            ->get();

        $errors = [];

        $newRows = [];
        foreach ($rows as $index => $row) {
            $rowNo = $index + 2;

            $name = Arr::get($row, 'employee');
            $password = Arr::get($row, 'password');

            if (! $name) {
                $errors[] = $this->setError($rowNo, trans('employee.props.name'), 'required');
            } elseif (! $employees->filter(function ($item) use ($name) {
                return strtolower($item->name) == strtolower($name) || $item->code_number == $name;
            })->first()) {
                $errors[] = $this->setError($rowNo, trans('employee.props.name'), 'invalid');
            }

            $employee = $employees->filter(function ($item) use ($name) {
                return strtolower($item->name) == strtolower($name) || $item->code_number == $name;
            })->first();

            if (! $employee) {
                $errors[] = $this->setError($rowNo, trans('employee.employee'), 'invalid');
            }

            if (! $password) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.password'), 'required');
            } elseif ($password && strlen($password) < 6 || strlen($password) > 32) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.password'), 'min_max', ['min' => 6, 'max' => 32]);
            } elseif ($password && ! $users->firstWhere('id', $employee?->user_id)) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.password'), 'required');
            }

            $row['employee_id'] = $employee?->id;
            $row['contact_id'] = $employee?->contact_id;
            $newRows[] = $row;
        }

        $rows = collect($newRows);

        return [$errors, $rows];
    }
}

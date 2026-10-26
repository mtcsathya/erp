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

class EmployeeBulkCreateUserAccount implements ToCollection, WithHeadingRow
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

            $email = Arr::get($row, 'email');
            $username = Arr::get($row, 'username');
            $password = Arr::get($row, 'password');

            $user = User::forceCreate([
                'name' => $contact->name,
                'email' => $email,
                'username' => $username,
                'password' => bcrypt($password),
                'email_verified_at' => now()->toDateString(),
                'status' => 'activated',
                'meta' => ['current_team_id' => auth()->user()->current_team_id],
            ]);

            $user->assignRole('staff');

            $contact->user_id = $user->id;
            $contact->save();
        }

        \DB::commit();

        activity()->enableLogging();
    }

    private function validate(Collection $rows)
    {
        $employees = Employee::query()
            ->summary()
            ->get();

        $contacts = Contact::query()
            ->select('id', 'email', 'user_id')
            ->whereIn('id', $employees->pluck('contact_id'))
            ->get();

        $users = User::query()
            ->whereIn('id', $employees->pluck('user_id'))
            ->get();

        $existingUserEmails = User::query()
            ->get()
            ->pluck('email')
            ->all();

        $existingUsernames = User::query()
            ->get()
            ->pluck('username')
            ->all();

        $errors = [];

        $newRows = [];
        $newUsernames = [];
        $employeeIds = [];
        foreach ($rows as $index => $row) {
            $rowNo = $index + 2;

            $name = Arr::get($row, 'employee');

            $username = Arr::get($row, 'username');
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

            $email = null;
            if ($employee) {
                $contact = $contacts->firstWhere('id', $employee->contact_id);
                $email = $contact->email;

                if (! $email) {
                    $errors[] = $this->setError($rowNo, trans('contact.props.email'), 'required');
                } elseif (in_array($email, $existingUserEmails)) {
                    $errors[] = $this->setError($rowNo, trans('contact.props.email'), 'exists');
                }
            }

            if (! $username) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.username'), 'required');
            }

            if ($username) {
                if (in_array($username, $existingUsernames)) {
                    $errors[] = $this->setError($rowNo, trans('auth.login.props.username'), 'exists');
                } else {
                    array_push($existingUsernames, $username);
                }

                $validUsername = preg_match('/^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/', $username);
                if (! $validUsername) {
                    $errors[] = $this->setError($rowNo, trans('auth.login.props.username'), 'invalid');
                }
            }

            if ($password && strlen($password) < 6 || strlen($password) > 32) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.password'), 'min_max', ['min' => 6, 'max' => 32]);
            }

            if (in_array($username, $newUsernames)) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.username'), 'duplicate');
            }

            if (in_array($employee?->id, $employeeIds)) {
                $errors[] = $this->setError($rowNo, trans('employee.employee'), 'duplicate');
            }

            if ($employee && $employee->user_id) {
                $errors[] = $this->setError($rowNo, trans('user.user'), 'exists');
            }

            $row['employee_id'] = $employee?->id;
            $row['contact_id'] = $employee?->contact_id;
            $row['email'] = $email;
            $newRows[] = $row;

            $newUsernames[] = $username;
            $employeeIds[] = $employee?->id;
        }

        $rows = collect($newRows);

        return [$errors, $rows];
    }
}

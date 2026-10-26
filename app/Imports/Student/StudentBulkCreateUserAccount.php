<?php

namespace App\Imports\Student;

use App\Concerns\ItemImport;
use App\Models\Contact;
use App\Models\Student\Student;
use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\HeadingRowImport;

class StudentBulkCreateUserAccount implements ToCollection, WithHeadingRow
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

        $logFile = $this->getLogFile('student');

        [$errors, $rows] = $this->validate($rows);

        $this->checkForErrors('student', $errors);

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

            $user->assignRole('student');

            $contact->user_id = $user->id;
            $contact->save();
        }

        \DB::commit();

        activity()->enableLogging();
    }

    private function validate(Collection $rows)
    {
        $students = Student::query()
            ->summary()
            ->get();

        $contacts = Contact::query()
            ->select('id', 'email', 'user_id')
            ->whereIn('id', $students->pluck('contact_id'))
            ->get();

        $users = User::query()
            ->whereIn('id', $students->pluck('user_id'))
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
        $studentIds = [];
        foreach ($rows as $index => $row) {
            $rowNo = $index + 2;

            $name = Arr::get($row, 'student');

            $username = Arr::get($row, 'username');
            $password = Arr::get($row, 'password');

            if (! $name) {
                $errors[] = $this->setError($rowNo, trans('student.props.name'), 'required');
            } elseif (! $students->filter(function ($item) use ($name) {
                return strtolower($item->name) == strtolower($name) || $item->code_number == $name;
            })->first()) {
                $errors[] = $this->setError($rowNo, trans('student.props.name'), 'invalid');
            }

            $student = $students->filter(function ($item) use ($name) {
                return strtolower($item->name) == strtolower($name) || $item->code_number == $name;
            })->first();

            $email = null;
            if ($student) {
                $contact = $contacts->firstWhere('id', $student->contact_id);
                $email = $contact->email ?: Arr::get($row, 'email');

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

            if (in_array($student?->id, $studentIds)) {
                $errors[] = $this->setError($rowNo, trans('student.student'), 'duplicate');
            }

            if ($student && $student->user_id) {
                $errors[] = $this->setError($rowNo, trans('user.user'), 'exists');
            }

            $row['student_id'] = $student?->id;
            $row['contact_id'] = $student?->contact_id;
            $row['email'] = $email;
            $newRows[] = $row;

            $newUsernames[] = $username;
            $studentIds[] = $student?->id;
        }

        $rows = collect($newRows);

        return [$errors, $rows];
    }
}

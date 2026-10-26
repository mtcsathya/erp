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

class StudentBulkUpdateUserAccount implements ToCollection, WithHeadingRow
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
        $students = Student::query()
            ->summary()
            ->get();

        $users = User::query()
            ->whereIn('id', $students->pluck('user_id'))
            ->get();

        $errors = [];

        $newRows = [];
        foreach ($rows as $index => $row) {
            $rowNo = $index + 2;

            $name = Arr::get($row, 'student');
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

            if (! $student) {
                $errors[] = $this->setError($rowNo, trans('student.student'), 'invalid');
            }

            if (! $password) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.password'), 'required');
            } elseif ($password && strlen($password) < 6 || strlen($password) > 32) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.password'), 'min_max', ['min' => 6, 'max' => 32]);
            } elseif ($password && ! $users->firstWhere('id', $student?->user_id)) {
                $errors[] = $this->setError($rowNo, trans('auth.login.props.password'), 'required');
            }

            $row['student_id'] = $student?->id;
            $row['contact_id'] = $student?->contact_id;
            $newRows[] = $row;
        }

        $rows = collect($newRows);

        return [$errors, $rows];
    }
}

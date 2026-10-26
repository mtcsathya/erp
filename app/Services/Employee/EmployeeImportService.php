<?php

namespace App\Services\Employee;

use App\Concerns\ItemImport;
use App\Imports\Employee\EmployeeBulkCreateUserAccount;
use App\Imports\Employee\EmployeeBulkUpdate;
use App\Imports\Employee\EmployeeBulkUpdateUserAccount;
use App\Imports\Employee\EmployeeImport;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;

class EmployeeImportService
{
    use ItemImport;

    public function import(Request $request)
    {
        $this->deleteLogFile('employee');

        $this->validateFile($request);

        if ($request->input('action', 'create') == 'bulk_update') {

            if (! auth()->user()->can('employee:edit')) {
                throw ValidationException::withMessages(['message' => trans('user.errors.permission_denied')]);
            }

            Excel::import(new EmployeeBulkUpdate, $request->file('file'));
        } elseif ($request->input('action', 'create') == 'bulk_create_user_account') {

            if (! auth()->user()->can('employee:edit')) {
                throw ValidationException::withMessages(['message' => trans('user.errors.permission_denied')]);
            }

            Excel::import(new EmployeeBulkCreateUserAccount, $request->file('file'));
        } elseif ($request->input('action', 'create') == 'bulk_update_user_account') {

            if (! auth()->user()->can('employee:edit')) {
                throw ValidationException::withMessages(['message' => trans('user.errors.permission_denied')]);
            }

            Excel::import(new EmployeeBulkUpdateUserAccount, $request->file('file'));
        } else {
            Excel::import(new EmployeeImport, $request->file('file'));
        }

        $this->reportError('employee');
    }
}

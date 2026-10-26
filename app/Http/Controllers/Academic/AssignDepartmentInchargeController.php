<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Models\Incharge;
use App\Services\Academic\AssignDepartmentInchargeService;
use Illuminate\Http\Request;

class AssignDepartmentInchargeController extends Controller
{
    public function __construct()
    {
        $this->middleware('test.mode.restriction')->only(['destroy']);
    }

    public function preRequisite(Request $request, AssignDepartmentInchargeService $service)
    {
        return $service->preRequisite($request);
    }

    public function assign(Request $request, AssignDepartmentInchargeService $service)
    {
        $service->assign($request);

        return response()->success([
            'message' => trans('global.updated', ['attribute' => trans('academic.department_incharge.department_incharge')]),
        ]);
    }
}

<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Models\Incharge;
use App\Services\Academic\AssignProgramInchargeService;
use Illuminate\Http\Request;

class AssignProgramInchargeController extends Controller
{
    public function __construct()
    {
        $this->middleware('test.mode.restriction')->only(['destroy']);
    }

    public function preRequisite(Request $request, AssignProgramInchargeService $service)
    {
        return $service->preRequisite($request);
    }

    public function assign(Request $request, AssignProgramInchargeService $service)
    {
        $service->assign($request);

        return response()->success([
            'message' => trans('global.updated', ['attribute' => trans('academic.program_incharge.program_incharge')]),
        ]);
    }
}

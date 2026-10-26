<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Models\Incharge;
use App\Services\Academic\AssignDivisionInchargeService;
use Illuminate\Http\Request;

class AssignDivisionInchargeController extends Controller
{
    public function __construct()
    {
        $this->middleware('test.mode.restriction')->only(['destroy']);
    }

    public function preRequisite(Request $request, AssignDivisionInchargeService $service)
    {
        $this->authorize('create', Incharge::class, 'division');

        return $service->preRequisite($request);
    }

    public function assign(Request $request, AssignDivisionInchargeService $service)
    {
        $this->authorize('create', Incharge::class, 'division');

        $service->assign($request);

        return response()->success([
            'message' => trans('global.updated', ['attribute' => trans('academic.division_incharge.division_incharge')]),
        ]);
    }
}

<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Models\Incharge;
use App\Services\Academic\AssignBatchInchargeService;
use Illuminate\Http\Request;

class AssignBatchInchargeController extends Controller
{
    public function __construct()
    {
        $this->middleware('test.mode.restriction')->only(['destroy']);
    }

    public function preRequisite(Request $request, AssignBatchInchargeService $service)
    {
        $this->authorize('create', Incharge::class, 'batch');

        return $service->preRequisite($request);
    }

    public function assign(Request $request, AssignBatchInchargeService $service)
    {
        $this->authorize('create', Incharge::class, 'batch');

        $service->assign($request);

        return response()->success([
            'message' => trans('global.updated', ['attribute' => trans('academic.batch_incharge.batch_incharge')]),
        ]);
    }
}

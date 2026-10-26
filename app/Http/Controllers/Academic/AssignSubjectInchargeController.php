<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Models\Incharge;
use App\Services\Academic\AssignSubjectInchargeService;
use Illuminate\Http\Request;

class AssignSubjectInchargeController extends Controller
{
    public function __construct()
    {
        $this->middleware('test.mode.restriction')->only(['destroy']);
    }

    public function preRequisite(Request $request, AssignSubjectInchargeService $service)
    {
        $this->authorize('create', Incharge::class, 'subject');

        return $service->preRequisite($request);
    }

    public function assign(Request $request, AssignSubjectInchargeService $service)
    {
        $this->authorize('create', Incharge::class, 'subject');

        $service->assign($request);

        return response()->success([
            'message' => trans('global.updated', ['attribute' => trans('academic.subject_incharge.subject_incharge')]),
        ]);
    }
}

<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Models\Incharge;
use App\Services\Academic\AssignCourseInchargeService;
use Illuminate\Http\Request;

class AssignCourseInchargeController extends Controller
{
    public function __construct()
    {
        $this->middleware('test.mode.restriction')->only(['destroy']);
    }

    public function preRequisite(Request $request, AssignCourseInchargeService $service)
    {
        $this->authorize('create', Incharge::class, 'course');

        return $service->preRequisite($request);
    }

    public function assign(Request $request, AssignCourseInchargeService $service)
    {
        $this->authorize('create', Incharge::class, 'course');

        $service->assign($request);

        return response()->success([
            'message' => trans('global.updated', ['attribute' => trans('academic.course_incharge.course_incharge')]),
        ]);
    }
}

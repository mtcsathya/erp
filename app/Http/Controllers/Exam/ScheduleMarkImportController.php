<?php

namespace App\Http\Controllers\Exam;

use App\Http\Controllers\Controller;
use App\Services\Exam\ScheduleMarkImportService;
use Illuminate\Http\Request;

class ScheduleMarkImportController extends Controller
{
    public function __invoke(Request $request, ScheduleMarkImportService $service)
    {
        $service->import($request);

        if (request()->boolean('validate')) {
            return response()->success([
                'message' => trans('general.data_validated'),
            ]);
        }

        return response()->success([
            'imported' => true,
            'message' => trans('global.imported', ['attribute' => trans('exam.mark')]),
        ]);
    }
}

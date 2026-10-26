<?php

namespace App\Services\Exam;

use App\Concerns\ItemImport;
use App\Imports\Exam\ScheduleMarkImport;
use App\Models\Exam\Schedule;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ScheduleMarkImportService
{
    use ItemImport;

    public function import(Request $request)
    {
        $this->deleteLogFile('exam-schedule-mark');

        $schedule = Schedule::query()
            ->with('batch', 'records.subject', 'exam', 'assessment')
            ->byPeriod()
            ->where('uuid', $request->schedule)
            ->firstOrFail();

        $this->validateFile($request);

        Excel::import(new ScheduleMarkImport([
            'schedule' => $schedule,
        ]), $request->file('file'));

        $this->reportError('exam-schedule-mark');
    }
}

<?php

namespace App\Imports\Exam;

use App\Concerns\ItemImport;
use App\Models\Student\Student;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\HeadingRowImport;

class ScheduleMarkImport implements ToCollection, WithHeadingRow
{
    use ItemImport;

    private $additionalData = [];

    protected $limit = 1000;

    protected $trimExcept = [];

    public function __construct($additionalData)
    {
        $this->additionalData = $additionalData;
    }

    public function collection(Collection $rows)
    {
        // throw ValidationException::withMessages(['message' => trans('general.errors.feature_under_development')]);

        $this->validateHeadings($rows);

        $headings = (new HeadingRowImport)->toArray(request()->file('file'))[0][0];

        if (count($rows) > $this->limit) {
            throw ValidationException::withMessages(['message' => trans('general.errors.max_import_limit_crossed', ['attribute' => $this->limit])]);
        }

        $logFile = $this->getLogFile('exam-schedule-mark');

        [$errors, $rows] = $this->validate($rows);

        $this->checkForErrors('exam-schedule-mark', $errors);

        if (! request()->boolean('validate') && ! \Storage::disk('local')->exists($logFile)) {
            $this->import($rows);
        }
    }

    private function import(Collection $rows, array $params = [])
    {
        activity()->disableLogging();

        $schedule = Arr::get($this->additionalData, 'schedule');
        $records = $schedule->records;

        $data = [];

        foreach ($rows as $index => $row) {
            $studentUuid = Arr::get($row, 'student_uuid');
            $assessmentCode = Arr::get($row, 'assessment_code');

            foreach ($records as $record) {
                if (! Arr::get($record->config, 'has_exam')) {
                    continue;
                }

                $subject = $record->subject;
                $inputSubjectColumn = $this->formatExcelHeading($subject->code);

                $obtainedMark = Arr::get($row, $inputSubjectColumn);

                if (in_array($obtainedMark, ['A', 'a', 'Ab', 'ab'])) {
                    $obtainedMark = 'A';
                }

                $data[$record->subject_id][$assessmentCode][] = [
                    'uuid' => $studentUuid,
                    'obtained_mark' => $obtainedMark,
                ];
            }
        }

        $data = collect($data)->map(function ($subjectData, $subjectId) {
            return [
                'subject_id' => $subjectId,
                'marks' => collect($subjectData)->map(function ($assessmentData, $assessmentCode) {
                    return [
                        'code' => $assessmentCode,
                        'marks' => $assessmentData,
                    ];
                })->values(),
            ];
        })->values();

        \DB::beginTransaction();

        foreach ($records as $record) {
            if (! Arr::get($record->config, 'has_exam')) {
                continue;
            }

            $subjectMarks = $data->where('subject_id', $record->subject_id)->first();

            $record->marks = Arr::get($subjectMarks, 'marks', []);
            $config = $record->config;
            $config['mark_recorded'] = true;
            $record->config = $config;
            $record->save();
        }

        \DB::commit();

        activity()->enableLogging();
    }

    private function validate(Collection $rows)
    {
        $schedule = Arr::get($this->additionalData, 'schedule');
        $batch = $schedule->batch;
        $exam = $schedule->exam;
        $records = $schedule->records;
        $assessment = $schedule->assessment;

        $students = Student::query()
            ->join('admissions', 'admissions.id', '=', 'students.admission_id')
            ->join('contacts', 'students.contact_id', '=', 'contacts.id')
            ->byPeriod()
            ->where('students.batch_id', $batch->id)
            ->select('students.id', 'students.uuid', 'admissions.code_number', 'admissions.leaving_date', 'fee_structure_id', \DB::raw('REGEXP_REPLACE(CONCAT_WS(" ", first_name, middle_name, third_name, last_name), "[[:space:]]+", " ") as name'))
            ->get();

        $errors = [];

        $examSubjects = [];
        foreach ($records as $record) {
            if (! Arr::get($record->config, 'has_exam')) {
                continue;
            }

            $examSubjects[] = [
                'subject_name' => $record->subject->name,
                'subject_code' => $record->subject->code,
                'assessments' => Arr::get($record->config, 'assessments', []),
            ];
        }

        $assessmentCodes = collect($assessment->records)->pluck('code')->toArray();

        $newRows = [];
        foreach ($rows as $index => $row) {
            $rowNo = $index + 2;

            $codeNumber = Arr::get($row, 'admission_number');
            $name = Arr::get($row, 'name');

            $student = null;
            if (! $codeNumber) {
                $errors[] = $this->setError($rowNo, trans('student.admission.props.code_number'), 'required');
            } elseif ($codeNumber && ! $students->where('code_number', $codeNumber)->first()) {
                $errors[] = $this->setError($rowNo, trans('student.admission.props.code_number'), 'invalid');
            } elseif ($codeNumber && $name && $students->where('name', $name)->where('code_number', $codeNumber)->count() == 0) {
                $errors[] = $this->setError($rowNo, trans('student.props.name'), 'invalid');
            } else {
                $student = $students->where('code_number', $codeNumber)->first();

                if (! $student) {
                    $errors[] = $this->setError($rowNo, trans('student.admission.props.code_number'), 'invalid');
                }
            }

            $assessment = Arr::get($row, 'assessment');

            // If there is only one assessment, then no need to have assessment column in the excel file
            if (count($assessmentCodes) == 1) {
                $assessment = $assessmentCodes[0];
            }

            if (! $assessment) {
                $errors[] = $this->setError($rowNo, trans('exam.assessment.assessment'), 'required');
            } elseif (! in_array($assessment, $assessmentCodes)) {
                $errors[] = $this->setError($rowNo, trans('exam.assessment.assessment'), 'invalid');
            }

            foreach ($examSubjects as $examSubject) {
                $inputSubjectColumn = $this->formatExcelHeading($examSubject['subject_code']);

                $recordAssessment = collect(Arr::get($examSubject, 'assessments', []))->where('code', $assessment)->first();

                $maxMark = 0;
                if (! $recordAssessment) {
                    $errors[] = $this->setError($rowNo, Arr::get($examSubject, 'subject_code'), 'invalid');
                } else {
                    $maxMark = Arr::get($recordAssessment, 'max_mark');
                }

                if ($maxMark) {
                    $obtainedMark = Arr::get($row, $inputSubjectColumn);

                    if ($obtainedMark) {
                        if (is_numeric($obtainedMark)) {
                            if ($obtainedMark < 0) {
                                $errors[] = $this->setError($rowNo, Arr::get($examSubject, 'subject_code'), 'min', ['min' => 0]);
                            } elseif ($obtainedMark > $maxMark) {
                                $errors[] = $this->setError($rowNo, Arr::get($examSubject, 'subject_code'), 'custom', ['message' => trans('validation.lt.numeric', ['attribute' => __('exam.obtained_mark'), 'value' => $maxMark])]);
                            }
                        } else {
                            if (! in_array($obtainedMark, ['A', 'a', 'Ab', 'ab'])) {
                                $errors[] = $this->setError($rowNo, Arr::get($examSubject, 'subject_code'), 'invalid');
                            }
                        }
                    }
                }
            }

            $row['student_id'] = $student?->id;
            $row['student_uuid'] = $student?->uuid;
            $row['assessment_code'] = $assessment;
            $newRows[] = $row;
        }

        $rows = collect($newRows);

        return [$errors, $rows];
    }

    private function trimInput(Collection $rows)
    {
        return collect($rows)
            ->map(function ($row) {
                return collect($row)->map(function ($value, $key) {
                    return in_array($key, $this->trimExcept) ? $value : trim($value);
                })->all();
            })->all();
    }

    private function formatExcelHeading($value)
    {
        return strtolower(
            preg_replace('/[^A-Za-z0-9]+/', '_', $value)
        );
    }
}

<?php

namespace App\Services\PaymentGateway;

use App\Actions\Student\PayOnlineFee;
use App\Enums\Finance\PaymentStatus;
use App\Helpers\SysHelper;
use App\Models\Config\Config;
use App\Models\Finance\Transaction;
use App\Models\Student\Registration;
use App\Models\Student\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class IciciService
{
    public function checkStatus(Request $request)
    {
        if (empty($request->query('reference_number'))) {
            return 'Enter reference number';
        }

        $transaction = Transaction::query()
            ->with('period')
            ->where('payment_gateway->reference_number', $request->query('reference_number'))
            ->first();

        if (! $transaction) {
            abort(404);
        }

        $pgAccount = Arr::get($transaction->payment_gateway, 'pg_account');

        $merchant = config('config.finance.icici_merchant');
        $mode = (bool) config('config.finance.enable_live_icici_mode');
        $version = config('config.finance.icici_version');

        $url = 'https://eazypayuat.icicibank.com/EazyPGVerify';

        if ($mode) {
            $url = 'https://eazypay.icicibank.com/EazyPGVerify';
        }

        $response = Http::get($url, [
            'ezpaytranid' => '',
            'amount' => '',
            'paymentmode' => '',
            'merchantid' => $merchant,
            'trandate' => '',
            'pgreferenceno' => Arr::get($transaction->payment_gateway, 'reference_number'),
        ]);

        $response = $response->body();

        // status=RIP&ezpaytranid=2508121781030&amount=30000&trandate=2025-08-12 16:47:49&pgreferenceno=250812HBT1EREHZG&sdt=&BA=30000&PF=0.00&TAX=0.0&PaymentMode=NET_BANKING

        $response = collect(explode('&', $response))
            ->mapWithKeys(function ($item) {
                $parts = explode('=', $item);

                return [Str::lower($parts[0]) => $parts[1] ?? null];
            })
            ->toArray();

        dd($response);
    }

    public function getResponse(Request $request)
    {
        $response = $this->validateSignature($request, 'callback');

        $status = Arr::get($response, 'status');
        $code = Arr::get($response, 'code');
        $transaction = Arr::get($response, 'transaction');

        if ($status == 'error') {
            if ($code == 'payment_failed') {
                $failedLogs = $transaction->failed_logs;
                $failedLogs[] = [
                    'name' => 'icici',
                    'error' => $request->error,
                ];
                $transaction->failed_logs = $failedLogs;
                $transaction->save();
            }

            return false;
        }

        $this->processPayment($transaction);

        return true;
    }

    public function redirectUrl(Request $request)
    {
        $response = $this->validateSignature($request);

        $status = Arr::get($response, 'status');
        $code = Arr::get($response, 'code');
        $transaction = Arr::get($response, 'transaction');

        if ($status == 'error') {
            if ($code == 'payment_failed') {

                $failedLogs = $transaction->failed_logs;
                $failedLogs[] = [
                    'name' => 'icici',
                    'error' => Arr::get($response, 'code_detail', 'Unknown error'),
                ];
                $transaction->failed_logs = $failedLogs;
                $transaction->save();

                $student = $transaction?->transactionable;
                $studentUrl = url('/app/students/'.$student?->uuid.'/fee');

                return view('messages.student.payment', [
                    'message' => trans('finance.transaction_failed', ['attribute' => Arr::get($transaction->payment_gateway, 'reference_number')]),
                    'url' => route('app'),
                    'type' => 'error',
                    'studentUrl' => $studentUrl,
                    'actionText' => trans('global.go_to', ['attribute' => trans('dashboard.dashboard')]),
                ]);
            } elseif ($code == 'transaction_not_found' || $code == 'invalid_signature') {
                abort(404);
            } elseif ($code == 'transaction_already_processed') {
                $student = $transaction?->transactionable;
                $studentUrl = url('/app/students/'.$student?->uuid.'/fee');

                return view('messages.student.payment', [
                    'message' => trans('finance.payment_succeed', ['attribute' => Arr::get($transaction, 'payment_gateway.reference_number'), 'amount' => $transaction->amount->formatted]),
                    'url' => route('app'),
                    'type' => 'error',
                    'studentUrl' => $studentUrl,
                    'actionText' => trans('global.go_to', ['attribute' => trans('dashboard.dashboard')]),
                ]);
            }
        }

        $paymentGateway = $transaction->payment_gateway;
        $paymentGateway['payment_id'] = Arr::get($response, 'payment_id');
        $transaction->payment_gateway = $paymentGateway;
        $transaction->save();

        // if (app()->environment('local')) {
        $this->processPayment($transaction);
        // }

        $student = $transaction->transactionable;
        $receiptUrl = route('students.transactions.export', ['student' => $student->uuid, 'transaction' => $transaction->uuid]);

        if (empty($transaction->user_id)) {
            $receiptUrl = route('payment.export', ['uuid' => $student->uuid, 'code_number' => $student->admission->code_number, 'reference_number' => Arr::get($transaction->payment_gateway, 'reference_number'), 'output' => 'pdf']);
        }

        $head = $transaction->head;
        $transactionable = $transaction->transactionable;

        if ($head == 'student_fee') {
            $studentUrl = url('/app/students/'.$transactionable->uuid.'/fee');

            return view('messages.student.payment', [
                'message' => trans('finance.payment_succeed', ['attribute' => Arr::get($transaction, 'payment_gateway.reference_number'), 'amount' => $transaction->amount->formatted]),
                'url' => route('app'),
                'type' => 'success',
                'receiptUrl' => $receiptUrl,
                'studentUrl' => $studentUrl,
                'actionText' => trans('global.go_to', ['attribute' => trans('dashboard.dashboard')]),
            ]);
        } else if ($head == 'registration_fee') {

            return view('messages.student.payment', [
                'message' => trans('finance.payment_succeed', ['attribute' => Arr::get($transaction, 'payment_gateway.reference_number'), 'amount' => $transaction->amount->formatted]),
                'url' => route('app'),
                'type' => 'success',
                'studentUrl' => url('/app/student/registrations/'.$transactionable->uuid),
                'actionText' => trans('global.go_to', ['attribute' => trans('dashboard.dashboard')]),
            ]);
        }
    }

    private function processPayment(Transaction $transaction)
    {
        $paymentType = $transaction->head;

        if ($paymentType == 'student_fee') {
            $student = Student::find($transaction->transactionable_id);

            if ($transaction->user_id && empty(auth()->user())) {
                \Auth::loginUsingId($transaction->user_id);
                SysHelper::setTeam($transaction->period->team_id);
            }

            \DB::beginTransaction();

            (new PayOnlineFee)->studentFeePayment($student, $transaction);

            \DB::commit();
        } elseif ($paymentType == 'registration_fee') {
            \DB::beginTransaction();

            $registration = Registration::find($transaction->transactionable_id);

            if ($transaction->user_id && empty(auth()->user())) {
                \Auth::loginUsingId($transaction->user_id);
                SysHelper::setTeam($transaction->period->team_id);
            }

            (new PayOnlineFee)->registrationFeePayment($registration, $transaction);

            $transaction->processed_at = now()->toDateTimeString();
            $transaction->save();

            $registration->payment_status = PaymentStatus::PAID;
            $registration->save();

            \DB::commit();
        }
    }

    private function validateSignature(Request $request)
    {
        $response = $request->all();

        $transaction = Transaction::query()
            ->where('payment_gateway->reference_number', Arr::get($response, 'ReferenceNo'))
            ->first();

        if (! $transaction) {
            return [
                'status' => 'error',
                'code' => 'transaction_not_found',
            ];
        }

        if (! empty($transaction->processed_at->value)) {
            return [
                'status' => 'error',
                'code' => 'transaction_already_processed',
                'transaction' => $transaction,
            ];
        }

        $config = Config::query()
            ->where('team_id', $transaction->period->team_id)
            ->whereName('finance')
            ->first();

        $secret = Arr::get($config->value, 'icici_secret');

        $data = [
            Arr::get($response, 'ID'),
            Arr::get($response, 'Response_Code'),
            Arr::get($response, 'Unique_Ref_Number'),
            Arr::get($response, 'Service_Tax_Amount'),
            Arr::get($response, 'Processing_Fee_Amount'),
            Arr::get($response, 'Total_Amount'),
            Arr::get($response, 'Transaction_Amount'),
            Arr::get($response, 'Transaction_Date'),
            Arr::get($response, 'Interchange_Value'),
            Arr::get($response, 'TDR'),
            Arr::get($response, 'Payment_Mode'),
            Arr::get($response, 'SubMerchantId'),
            Arr::get($response, 'ReferenceNo'),
            Arr::get($response, 'TPS'),
            $secret,
        ];

        $string = implode('|', $data);

        $hash = hash('sha512', $string);

        // logger('Generated hash: ' . $hash);
        // logger('Received hash: ' . Arr::get($response, 'RS'));
        // logger('Received hash RSV: ' . Arr::get($response, 'RSV'));

        if (! hash_equals($hash, Arr::get($response, 'RS'))) {
            return [
                'status' => 'error',
                'code' => 'invalid_signature',
                'transaction' => $transaction,
            ];
        }

        if (Arr::get($response, 'Response_Code') !== 'E000') {
            return [
                'status' => 'error',
                'code' => 'payment_failed',
                'code_detail' => Arr::get($response, 'Response_Code'),
                'transaction' => $transaction,
            ];
        }

        return [
            'transaction' => $transaction,
            'status' => 'success',
            'payment_id' => Arr::get($response, 'Unique_Ref_Number'),
        ];
    }
}

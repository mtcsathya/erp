<?php

namespace App\Console\Commands\Finance;

use App\Actions\Student\PayOnlineFee;
use App\Enums\Finance\PaymentStatus;
use App\Models\Config\Config;
use App\Models\Finance\Transaction;
use App\Models\Student\Registration;
use App\Models\Student\Student;
use App\Support\PaymentGatewayMultiAccountSeparator;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class IciciStatusCheck extends Command
{
    use PaymentGatewayMultiAccountSeparator;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'icici:status {refnum? : Reference Number}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Icici Status Check';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $refnum = $this->argument('refnum');

        $transaction = Transaction::query()
            ->where('is_online', 1)
            ->where('payment_gateway->name', 'icici')
            ->when(empty($refnum), function ($q) {
                $q->where(function ($q) {
                    $q->whereNull('payment_gateway->status')
                        ->orWhere('payment_gateway->status', '!=', 'updated');
                });
            })
            ->when($refnum, function ($q, $refnum) {
                $q->where('payment_gateway->reference_number', $refnum);
            }, function ($q) {
                $q->whereNull('processed_at')
                    ->where('created_at', '<=', now()->subMinutes(10));
            })
            ->orderBy('created_at', 'desc')
            ->first();

        if (! $transaction) {
            $this->info('No transaction found');

            return;
        }

        $transaction->load('period');

        $config = Config::query()
            ->whereTeamId($transaction->period->team_id)
            ->whereName('finance')
            ->first();

        $pgAccount = Arr::get($transaction->payment_gateway, 'pg_account');

        $merchant = Arr::get($config->value, 'icici_merchant');
        $mode = (bool) Arr::get($config->value, 'enable_live_icici_mode');

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

        if (! Arr::get($response, 'ezpaytranid')) {
            $this->info('Error desc: Invalid order '.Arr::get($transaction->payment_gateway, 'reference_number'));
            $this->failTransaction($transaction, 'Invalid order');

            return;
        }

        $referenceNumber = Arr::get($response, 'pgreferenceno');

        // For incomplete payment this payment id won't be available
        // if (Arr::get($transaction->payment_gateway, 'payment_id') != Arr::get($response, 'ezpaytranid')) {
        //     $this->info('Error desc: Transaction ID Mismatch');
        //     $this->failTransaction($transaction, 'Transaction ID Mismatch');

        //     return;
        // }

        $status = Arr::get($response, 'status');

        if (! in_array($status, ['RIP', 'SIP', 'SUCCESS'])) {
            $this->info('Transaction not completed');
            $this->failTransaction($transaction, Arr::get($response, 'transaction_error_desc', 'failed_transaction'));

            return;
        }

        $amount = Arr::get($response, 'amount');

        // temporarily removing this check as for cc payment amount includes charges
        // if ($amount != $transaction->amount->value) {
        //     // if (abs($amount - $transaction->amount->value) > 1) {
        //     $this->info('Amount mismatch');
        //     $this->failTransaction($transaction, 'amount_mismatch');

        //     return;
        //     // }
        // }

        // Will check when there is such case
        // $refundInfo = Arr::get($response, 'refundInfo', []);

        // if (count($refundInfo)) {
        //     $this->info('Amount refunded');
        //     $this->failTransaction($transaction, 'amount_refunded');

        //     return;
        // }

        if ($transaction->processed_at->value) {
            $this->info('Transaction already processed');

            return;
        }

        $head = $transaction->head;

        if ($head == 'student_fee') {
            \DB::beginTransaction();

            $student = Student::find($transaction->transactionable_id);

            (new PayOnlineFee)->studentFeePayment($student, $transaction);

            $transaction->payment_gateway = array_merge($transaction->payment_gateway, [
                'status' => 'updated',
                'payment_id' => Arr::get($response, 'ezpaytranid'),
                'payment_method_type' => Arr::get($response, 'PaymentMode'),
            ]);
            $transaction->processed_at = now()->toDateTimeString();
            $transaction->save();

            \DB::commit();

            $this->info('Fee paid successfully');
        } elseif ($head == 'registration_fee') {
            \DB::beginTransaction();

            $registration = Registration::find($transaction->transactionable_id);

            (new PayOnlineFee)->registrationFeePayment($registration, $transaction);

            $transaction->payment_gateway = array_merge($transaction->payment_gateway, [
                'status' => 'updated',
                'transactionid' => Arr::get($response, 'ezpaytranid'),
                'payment_method_type' => Arr::get($response, 'PaymentMode'),
            ]);
            $transaction->processed_at = now()->toDateTimeString();
            $transaction->save();

            $registration->payment_status = PaymentStatus::PAID;
            $registration->save();

            \DB::commit();

            $this->info('Fee paid successfully');
        } else {
            $this->info('Invalid fee');
            $this->failTransaction($transaction, 'invalid_fee');

            return;
        }
    }

    private function failTransaction(Transaction $transaction, $code)
    {
        $transaction->payment_gateway = array_merge($transaction->payment_gateway, [
            'status' => 'updated',
            'code' => $code,
        ]);
        $transaction->save();
    }

    private function getTransactionData(Collection $data, $key)
    {
        $item = $data->first(function ($item) use ($key) {
            return starts_with($item, $key.'=');
        });

        return explode('=', $item)[1] ?? null;
    }
}

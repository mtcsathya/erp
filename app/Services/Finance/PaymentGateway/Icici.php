<?php

namespace App\Services\Finance\PaymentGateway;

use App\Concerns\HasPaymentGateway;
use App\Contracts\Finance\PaymentGateway;
use App\Models\Finance\Transaction;
use App\Models\Student\Student;
use App\Support\PaymentGatewayMultiAccountSeparator;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;

class Icici implements PaymentGateway
{
    use HasPaymentGateway, PaymentGatewayMultiAccountSeparator;

    public function getName(): string
    {
        return 'icici';
    }

    public function getVersion(): string
    {
        return config('config.finance.icici_version', 'NA');
    }

    public function isEnabled(): void
    {
        if (! config('config.finance.enable_icici', false)) {
            throw ValidationException::withMessages(['message' => trans('general.errors.invalid_operation')]);
        }
    }

    public function getMultiplier(Request $request): float
    {
        return 1;
    }

    public function supportedCurrencies(): array
    {
        return ['INR'];
    }

    public function unsupportedCurrencies(): array
    {
        return [];
    }

    public function initiatePayment(Request $request, Student $student, Transaction $transaction): array
    {
        $this->validateCurrency($transaction, $this->supportedCurrencies(), $this->unsupportedCurrencies());

        $pgAccount = Arr::get($transaction->payment_gateway, 'pg_account');

        $secret = $this->getCredential(config('config.finance.icici_secret'), $pgAccount);
        $client = $this->getCredential(config('config.finance.icici_client'), $pgAccount);
        $merchant = $this->getCredential(config('config.finance.icici_merchant'), $pgAccount);

        $referenceNumber = Arr::get($transaction->payment_gateway, 'reference_number');

        $batchCourseName = $student->course_name.' '.$student->batch_name;
        // if > 20 character then make it 18 character
        if (strlen($batchCourseName) > 20) {
            $batchCourseName = substr($batchCourseName, 0, 18);
        }

        $mandatoryFields = [
            $referenceNumber,
            $client,
            $transaction->amount->value,
            $student->name,
            $student->code_number,
            $batchCourseName,
            $transaction->uuid,
            'student_fee',
        ];

        $mandatoryFieldsString = implode('|', $mandatoryFields);
        $encryptedMandatoryFields = $this->getEncryptedString($mandatoryFieldsString, $secret);

        $optionalFields = [];

        $optionalFieldsString = implode('|', $optionalFields);
        $encryptedOptionalFields = $this->getEncryptedString($optionalFieldsString, $secret);

        $returnUrl = url('payment/icici/redirect');
        $returnUrlString = $this->getEncryptedString($returnUrl, $secret);

        $referenceNumberString = $this->getEncryptedString($referenceNumber, $secret);

        $clientString = $this->getEncryptedString($client, $secret);
        $amountString = $this->getEncryptedString($transaction->amount->value, $secret);
        $paymentModeString = $this->getEncryptedString('9', $secret);

        $pgUrl = 'https://eazypayuat.icicibank.com/EazyPG';

        if (config('config.finance.enable_live_icici_mode')) {
            $pgUrl = 'https://eazypay.icicibank.com/EazyPG';
        }

        $url = $pgUrl.'?merchantid='.$merchant.'&mandatory fields='.$encryptedMandatoryFields.'&optional fields='.$encryptedOptionalFields.'&returnurl='.$returnUrlString.'&Reference No='.$referenceNumberString.'&submerchantid='.$clientString.'&transaction amount='.$amountString.'&paymode='.$paymentModeString;

        // $plainUrl = $pgUrl . '?merchantid=' . $merchant . '&mandatory fields=' . $mandatoryFieldsString . '&optional fields=' . $optionalFieldsString . '&returnurl=' . $returnUrl . '&Reference No=' . $referenceNumber . '&submerchantid=' . $client . '&transaction amount=' . $transaction->amount->value . '&paymode=9';

        // logger('Encrypted URL:');
        // logger($url);
        // logger('Plain URL:');
        // logger($plainUrl);

        return [
            'token' => $transaction->uuid,
            'pg_url' => $url,
        ];
    }

    private function getEncryptedString(string $string, string $secret): string
    {
        $cipher = 'AES-128-ECB';

        in_array($cipher, openssl_get_cipher_methods(true));

        $ivlen = openssl_cipher_iv_length($cipher);

        // $iv = openssl_random_pseudo_bytes(1);
        $iv = '';

        $ciphertext = openssl_encrypt($string, $cipher, $secret, $options = 0, $iv);

        return $ciphertext;
    }

    private function getTransaction(Request $request)
    {
        $transaction = Transaction::query()
            ->whereUuid($request->token)
            ->first();

        if (! $transaction) {
            throw ValidationException::withMessages(['message' => trans('general.errors.invalid_input')]);
        }

        return $transaction;
    }

    public function confirmPayment(Request $request): Transaction
    {
        $transaction = $this->getTransaction($request);

        throw ValidationException::withMessages(['message' => 'test']);

        return $transaction;
    }

    public function failPayment(Request $request): Transaction
    {
        $transaction = $this->getTransaction($request);

        $failedLogs = $transaction->failed_logs;
        $failedLogs[] = [
            'name' => $this->getName(),
            'error' => $request->error,
        ];
        $transaction->failed_logs = $failedLogs;
        $transaction->save();

        return $transaction;
    }
}

<?php

namespace App\Http\Controllers\PaymentGateway;

use App\Http\Controllers\Controller;
use App\Services\PaymentGateway\IciciService;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class IciciController extends Controller
{
    public function checkStatus(Request $request, IciciService $service)
    {
        return $service->checkStatus($request);
    }

    public function getResponse(Request $request, IciciService $service)
    {
        dd($request->all());
        $response = $service->getResponse($request);

        if ($response) {
            return response()->success([]);
        }

        throw ValidationException::withMessages(['message' => trans('general.errors.invalid_input')]);
    }

    public function redirectUrl(Request $request, IciciService $service)
    {
        // logger('redirect');
        // dd($request->all());
        return $service->redirectUrl($request);
    }
}

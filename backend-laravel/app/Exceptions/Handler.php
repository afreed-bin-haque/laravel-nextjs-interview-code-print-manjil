<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Throwable $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        // Log the exception for debugging
        Log::error('Exception occurred: ' . $exception->getMessage(), [
            'exception' => $exception
        ]);

        // Handle known HTTP exceptions
        $get_message = $exception->getMessage()?$exception->getMessage():"Could not process request url";
        $get_line = $exception->getLine()?$exception->getLine():"";
        $statusCode = $exception instanceof HttpException ? $exception->getStatusCode() : 500;
        if ($this->isHttpException($exception)) {
           
            

            return response()->json([
                "status" => false,
                "signal" => Response::$statusTexts[$statusCode],
                "msg" => $get_message." in line ".$get_line
            ],400);
        }

        return response()->json([
            "status" => false,
            "signal" => Response::$statusTexts[$statusCode],
            "msg" => $get_message." in line ".$get_line
        ],500);
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpFoundation\Response;

class SessionVerifyUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $req, Closure $next): Response
    {
        $ac_token = $req->header('ac-token');
        $verify_sesion = Cache::get($ac_token);
        if($verify_sesion){
            $data =  [
                "merchant_sl" => $verify_sesion->merchant_sl,
                "owner_name" => $verify_sesion->owner_name,
                "owner_email" => $verify_sesion->owner_email,
                "position" => $verify_sesion->position,
            ];
            $req->merge($data);

            return $next($req);
        }
        return response()->json([
            "status" => false,
            "signal" => "Access Forbidden",
            "msg" => "You are not allowed to Access"
        ],403);
    }
}

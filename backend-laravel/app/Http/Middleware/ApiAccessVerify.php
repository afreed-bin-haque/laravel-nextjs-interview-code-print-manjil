<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Symfony\Component\HttpFoundation\Response;

class ApiAccessVerify
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $req, Closure $next): Response
    {
        $provided_token = $req->header('f-token');
        $approved_token = Config::get('SystemAccess.api-token');
        if($provided_token === $approved_token){
            return $next($req);
        }
        return response()->json([
            "status" => false,
            "signal" => "Access Forbidden",
            "msg" => "You are not allowed to Access"
        ],403);
        
    }
}

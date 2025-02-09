<?php

use App\Http\Controllers\API\MerchantController;
use App\Http\Middleware\ApiAccessVerify;
use App\Http\Middleware\SessionVerifyUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware([ApiAccessVerify::class])->group(function(){
    Route::prefix('frontend')->group(function(){
        Route::get('/get-shpp-list',function(){
            return response()->json("componsent mounted");
        })->name('home');
    });

    Route::prefix('merchant')->group(function(){
        Route::post('/register',[MerchantController::class,'RegisterMerchant']);
        Route::post('/login',[MerchantController::class,'LoginMerchant']);
        Route::middleware([SessionVerifyUser::class])->group(function(){
            Route::post("/save-store",[MerchantController::class,'SaveStore']);
        });
    });
});
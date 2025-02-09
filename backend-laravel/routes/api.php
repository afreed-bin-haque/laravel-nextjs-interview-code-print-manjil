<?php

use App\Http\Middleware\ApiAccessVerify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware([ApiAccessVerify::class])->group(function(){
    Route::prefix('frontend')->group(function(){
        Route::get('/get-shpp-list',function(){
            return response()->json("componsent mounted");
        })->name('home');
    });
});
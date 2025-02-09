<?php

namespace App\Http\Controllers\API;

use App\Helpers\helper;
use App\Http\Controllers\Controller;
use App\Models\Merchant;
use Carbon\Carbon;
use Exception;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class MerchantController extends Controller
{
    public function RegisterMerchant(Request $req){
        try{
            $rules = [
                'name' => 'required',
                'email' => 'required|email|unique:merchants,owner_email',
                'shop_name' => 'required',
                'shop_password' => 'required',
            ];
            $validator = Validator::make($req->all(), $rules);
            if ($validator->fails()) {
                $all_errors = implode(" ",$validator->errors()->all());
                return response()->json([
                   'status' => false,
                   'signal' => "Bad request",
                   'msg' => $all_errors
                ], 200);
            }
            $get_body = $req->json()->all();
            $owner_name = $get_body["name"];
            $owner_email = $get_body["email"];
            $shop_name = $get_body["shop_name"];
            $shop_password = $get_body["shop_password"];

            $random = Str::random(4);

            $merchant_sl = IdGenerator::generate(['table' => 'merchants','field'=>'merchant_sl', 'length' => 10, 'prefix' => $random]);
            
            $save_Merchant = new Merchant();
            $save_Merchant->merchant_sl = $merchant_sl;
            $save_Merchant->owner_name = $owner_name;
            $save_Merchant->owner_email = $owner_email;
            $save_Merchant->shop_name = $shop_name;
            $save_Merchant->shop_password = Hash::make($shop_password);
            $save_Merchant->save();

            return response()->json([
                "status" => true,
                "signal" => "no",
                "msg" => "Merchant registered successfully"
            ],200);

        }catch(Exception $e){
            $get_message = $e->getMessage();
            $get_line = $e->getLine();
            
            return response()->json([
                "status" => false,
                "signal" => "Unproccessable Request Function",
                "msg" => $get_message." in line ".$get_line
            ],500);
        }
    }

    public function LoginMerchant(Request $req){
        try{
            $rules = [
                'email' => 'required',
                'shop_password' => 'required',
            ];
            $validator = Validator::make($req->all(), $rules);
            if ($validator->fails()) {
                $all_errors = implode(" ",$validator->errors()->all());
                return response()->json([
                   'status' => false,
                   'signal' => "Bad request",
                   'msg' => $all_errors
                ], 200);
            }
            $get_body = $req->json()->all();
            $owner_email = $get_body["email"];
            $shop_password = $get_body["shop_password"];
            $verify_merchant = Merchant::where("owner_email","=",$owner_email)->first();
            if($verify_merchant){
                $verify_passward = Hash::check($shop_password,$verify_merchant->shop_password);
                if($verify_passward){
                    $payload = (object)[
                        "merchant_sl" => $verify_merchant->merchant_sl,
                        "owner_name" => $verify_merchant->owner_name,
                        "owner_email" => $verify_merchant->owner_email,
                        "position" => "merchant",
                    ];
                    $key = helper::GenerateTokenUser();
                    Cache::put($key,$payload,Carbon::now()->addHours(1));
                    return response()->json([
                        "status" => true,
                        "signal" => "no",
                        "msg" => "Successfully logged in",
                        "result" => (object)[
                            "token" =>$key,
                            "path" =>"merchant",
                        ]
                    ],200);
                }
                return response()->json([
                    "status" => false,
                    "signal" => "Forbidden",
                    "msg" => "Wrong password"
                ],200);
            }
            return response()->json([
                "status" => false,
                "signal" => "Forbidden",
                "msg" => "Please provide registered email"
            ],200);
        }catch(Exception $e){
            $get_message = $e->getMessage();
            $get_line = $e->getLine();
            
            return response()->json([
                "status" => false,
                "signal" => "Unproccessable Request Function",
                "msg" => $get_message." in line ".$get_line
            ],500);
        }
    }

    public function SaveStore(Request $req){
        try{
            $user_data = $req->get('merchant_sl');
            return $user_data;
        }catch(Exception $e){
            $get_message = $e->getMessage();
            $get_line = $e->getLine();
            
            return response()->json([
                "status" => false,
                "signal" => "Unproccessable Request Function",
                "msg" => $get_message." in line ".$get_line
            ],500);
        }
    }
}

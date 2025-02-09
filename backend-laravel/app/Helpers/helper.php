<?php 
namespace App\Helpers;

class helper{
    public static function GenerateTokenUser(){
        $length = 40;
          $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
          $charactersLength = strlen($characters);
          $randomString = '';
          for ($i = 0; $i < $length; $i++) {
              $randomString = $characters[rand(0, $charactersLength - 1)];
          }
          $token_enc = md5($randomString . microtime());
          return $token_enc;
    }
}
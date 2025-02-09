<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Merchant extends Model
{
    protected $fillable = [
        'owner_name',
        'owner_email',
        'shop_name',
        'shop_password',
    ];
}

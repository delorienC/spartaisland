<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{
    protected $table = "users";
    protected $fillable = [
        "id",
        'name',
        'email',
        'email_verified_at'
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'updated_at',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Helpers\DataFormatHelper;

class Employees extends Model
{
    protected $table = "users";
    protected $fillable = [
        "id",
        'name',
        'email',
        'email_verified_at',
        'created_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'updated_at',
    ];

    public function getCreatedAtAttribute($value)
    {
        return (new DataFormatHelper())->formatDate($value);
    }

    public function getEmailVerifiedAtAttribute($value)
    {
        return (new DataFormatHelper())->formatDate($value);
    }

}

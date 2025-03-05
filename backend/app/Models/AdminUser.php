<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

/**
 * 
 *
 * @property int $id
 * @property string $firstname
 * @property string $lastname
 * @property string $email
 * @property string $password
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $role
 * @property string|null $remember_token
 * @property string|null $api_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\AdminUserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereApiToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereFirstname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereLastname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AdminUser whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AdminUser extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $table = "admin_user";

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'role',
        'api_token',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'api_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}

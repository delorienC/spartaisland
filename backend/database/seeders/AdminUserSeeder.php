<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\AdminUser;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('admin_user')->insert([
            'firstname' => env('ADMIN_FIRSTNAME', 'Admin'),
            'lastname' => env('ADMIN_LASTNAME', 'Admin'),
            'email' => env('ADMIN_EMAIL', 'G4M9Z@example.com'),
            'password' => Hash::make(env('ADMIN_PASSWORD', 'password')),
            'role' => 'superadmin',
        ]);
        AdminUser::factory(10)->create();
    }
}

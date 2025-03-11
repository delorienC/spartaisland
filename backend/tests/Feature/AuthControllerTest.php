<?php

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

it('allows a user to log in with valid credentials', function () {
    $user = User::factory()->create([
        'email' => 'test@example.com',
        'password' => Hash::make('password123'),
    ]);

    $response = $this->postJson('/api/login', [
        'email' => 'test@example.com',
        'password' => 'password123',
    ]);

    $response->assertStatus(200)
        ->assertJsonStructure(['token']);

    User::where('email', 'like', 'test@example.com')->delete();
});

it('rejects login with invalid credentials', function () {
    $response = $this->postJson('/api/login', [
        'email' => 'wrong@example.com',
        'password' => 'wrongpassword',
    ]);

    $response->assertStatus(401);
});

it('checks authentication using Sanctum token', function () {
    $user = User::factory()->create([
        'email' => 'test@example.com',
        'password' => Hash::make('password123'),
    ]);

    $token = $user->createToken('authToken')->plainTextToken;

    $response = $this->withHeaders([
        'Authorization' => 'Bearer ' . $token,
    ])->getJson('/api/test-auth');

    $response->assertStatus(200);

    User::where('email', 'test@example.com')->delete();
    DB::table('sessions')->truncate();
});


it('deletes test@example.com from the database', function () {
    User::where('email', 'test@example.com')->delete();
    expect(User::where('email', 'ptest@example.com')->exists())->toBeFalse();
});

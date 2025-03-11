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

it('checks authentication using refresh token', function () {
    $user = User::factory()->create(['email' => 'test@example.com', 'password' => Hash::make('password123')]);

    $refreshToken = $user->createToken('refreshToken')->plainTextToken;
    $user->update(['refresh_token' => $refreshToken]);
    $response = $this->withHeaders([
        'X-Test-Token' => $refreshToken,
    ])->getJson('/api/is_authenticated');

    // Verify that authentication was successful
    $response->assertStatus(200)
        ->assertJson(['authenticated' => true]);

    User::where('email', 'like', 'test@example.com')->delete();
    DB::table('sessions')->truncate();
});

it('rejects authentication check with invalid token', function () {
    $response = $this->withCookie('refresh_token', 'invalid_token')
        ->getJson('/api/is_authenticated');

    $response->assertStatus(401);
});

it('deletes test@example.com from the database', function () {
    User::where('email', 'test@example.com')->delete();
    expect(User::where('email', 'ptest@example.com')->exists())->toBeFalse();
});

<?php

test('example', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});

use App\Models\AdminUser;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;

it('admin can login with valid credentials', function () {
    $user = AdminUser::factory()->create([
        'password' => Hash::make('password123'),
    ]);

    $response = $this->postJson('/api/login', [
        'email' => $user->email,
        'password' => 'password123',
    ]);

    $response->assertStatus(200)
        ->assertJsonStructure(['token']);
});

it('admin cannot login with invalid credentials', function () {
    $response = $this->postJson('/api/login', [
        'email' => 'invalid@example.com',
        'password' => 'invalidpassword',
    ]);

    $response->assertStatus(401)
        ->assertJson(['error' => 'Invalid credentials']);
});
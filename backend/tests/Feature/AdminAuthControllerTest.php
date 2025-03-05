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
        'email' => 'pestuser@example.com',
        'password' => Hash::make('password12345678'),
    ]);

    $response = $this->postJson('/api/login', [
        'email' => 'pestuser@example.com',
        'password' => 'password12345678',
    ]);

    $response->assertStatus(200)
        ->assertJsonStructure(['token']);
});

it('deletes pestuser@example.com from the database', function () {
    AdminUser::where('email', 'pestuser@example.com')->delete();
    expect(AdminUser::where('email', 'pestuser@example.com')->exists())->toBeFalse();
});


it('admin cannot login with invalid credentials', function () {
    $response = $this->postJson('/api/login', [
        'email' => 'invalid@example.com',
        'password' => 'invalidpassword',
    ]);

    $response->assertStatus(401)
        ->assertJson(['error' => 'Invalid credentials']);
});
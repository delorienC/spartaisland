<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    use DatabaseTransactions;

    public function test_user_can_login_with_correct_credentials(): void
    {
        // Erstellen Sie einen Benutzer für den Test
        $user = User::factory()->create(attributes: [
            'email' => 'test@example.com',
            'password' => Hash::make('password123'),
        ]);

        // Anmeldeversuch
        $response = $this->postJson(uri: '/api/login', data: [
            'email' => 'test@example.com',
            'password' => 'password123',
        ]);

        // Antwort überprüfen
        $response->assertStatus(200)
            ->assertJsonStructure(structure: [
                'message',
                'token',
            ]);

        // Attempt to login with wrong password
        $response = $this->postJson(uri: '/api/login', data: [
            'email' => 'test@example.com',
            'password' => 'wrongpassword',
        ]);

        // Überprüfen, ob der Benutzer authentifiziert ist
        $this->assertAuthenticated();

        // Benutzer nach dem Test aus der Datenbank entfernen
        $user->delete();
    }
}

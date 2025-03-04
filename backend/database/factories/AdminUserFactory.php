<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AdminUser>
 */
class AdminUserFactory extends Factory
{

    protected static $password = 'password';
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "firstname" => $this->faker->firstName,
            "lastname" => $this->faker->lastName,
            "email" => $this->faker->unique()->safeEmail,
            "password" => static::$password,
            "role" => $this->faker->randomElement(["superadmin", "admin", "manager"]),
            "email_verified_at" => now(),
            "remember_token" => $this->faker->randomElement([null, $this->faker->randomAscii]),
            "api_token" => $this->faker->randomElement([null, $this->faker->randomAscii]),
            "created_at" => now(),
        ];
    }
}

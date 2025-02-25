<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginUserRequest;
use App\Models\User;
use App\Traits\ApiRespones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\Sanctum;

class AuthController extends Controller
{
    use ApiRespones;

    public function login(LoginUserRequest $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        $user = User::firstWhere('email', $request->email);
        $accessToken = $user->createToken('authToken')->plainTextToken;
        $refreshToken = $user->createToken('refreshToken')->plainTextToken;
        $cookie = cookie('refresh_token', $refreshToken, 60 * 24 * 7, '/', null, true, true);

        return response()->json(['token' => $accessToken])->withCookie($cookie);
    }

    public function register(Request $request)
    {
        // Register the user
        //return $this->ok('User registered successfully');
    }

    public function is_authenticated(Request $request)
    {
        if (!$refreshToken = $request->cookie('refresh_token')) {
            logger('inside is_authenticated, no refresh token');
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        return response()->json([
            'authenticated' => 'true',
            'refresh_token' => $refreshToken
        ]);
    }
}

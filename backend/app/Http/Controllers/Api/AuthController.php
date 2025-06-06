<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginUserRequest;
use App\Models\User;
use App\Traits\ApiResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use ApiResponses;

    /**
     * Handle an authentication attempt.
     *
     * @param LoginUserRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginUserRequest $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
        $user = Auth::user();
        $expiresAt = now()->addMinutes((int) env('TOKEN_MINUTES_EXPIRES', 60));
        $accessToken = $user->createToken('token')->plainTextToken;
        return response()->json(
            [
                'token' => $accessToken,
                'expires_at' => $expiresAt,
            ]
        );
    }

    public function logout(LoginUserRequest $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Token deleted']);
    }
}

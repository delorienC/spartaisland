<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginUserRequest;
use App\Models\AdminUser;
use App\Traits\ApiRespones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\Sanctum;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{
    public function login(LoginUserRequest $request)
    {
        $user = AdminUser::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        // $user = AdminUser::firstWhere('email', $request->email);
        $accessToken = $user->createToken('authToken')->plainTextToken;
        return response()->json(['token' => $accessToken]);
    }
}

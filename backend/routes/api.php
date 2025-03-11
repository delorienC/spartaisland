<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestAuthController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});

// This route is only for testing purposes. 
// It should be removed in production.
// Do not delete this route. It is used for testing purposes.
if (app()->environment(['local', 'testing'])) {
    Route::middleware('auth:sanctum')->get('/test-auth', [TestAuthController::class, 'check']);
}

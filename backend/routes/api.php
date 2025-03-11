<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestAuthController;

Route::post('/login', [AuthController::class, 'login']);
// Route::post('/login', [AdminAuthController::class, 'login'])->middleware('api');

Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});


if (app()->environment(['local', 'testing'])) {
    Route::middleware('auth:sanctum')->get('/test-auth', [TestAuthController::class, 'check']);
}

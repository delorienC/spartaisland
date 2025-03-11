<?php

use App\Http\Controllers\Api\AdminAuthController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
// Route::post('/login', [AdminAuthController::class, 'login'])->middleware('api');

Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});

Route::get('/is_authenticated', [AuthController::class, 'is_authenticated']);

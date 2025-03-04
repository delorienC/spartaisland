<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\V1\TicketController;
use App\Http\Controllers\Api\AdminAuthController;


Route::post('/login', [AdminAuthController::class, 'login']);
//Route::post('/login', [AdminAuthController::class, 'login'])->middleware('api');

Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});

Route::middleware('auth:sanctum')->apiResource('tickets', TicketController::class);

Route::get('/is_authenticated', [AuthController::class, 'is_authenticated']);

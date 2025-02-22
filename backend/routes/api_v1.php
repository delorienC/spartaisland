<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Models\Ticket;
use Illuminate\Routing\Router;
use App\Http\Controllers\Api\V1\TicketController;


Route::get('/tickets', [TicketController::class, 'tickets']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

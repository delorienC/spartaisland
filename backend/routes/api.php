<?php
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\EmployeesController;
use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\SettingsController;
use App\Http\Controllers\Api\LogsController;
use App\Http\Controllers\Api\SupportController;
use App\Http\Controllers\Api\BillingController;
use App\Http\Controllers\Api\BackupController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestAuthController;
use Illuminate\Support\Facades\Log;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->post('/logout', [
    AuthController::class,
    'logout',
]);

Route::get('/', function () {
    return response()->json([
        'message' => 'Welcome to the API',
    ]);
});

// Admin Panel

Route::middleware('auth:sanctum')
    ->post('employees', [EmployeesController::class, 'index']);

Route::middleware([EnsureFrontendRequestsAreStateful::class])
    ->group(function () {
        Route::middleware('auth:sanctum')
            ->post('/roles', [RolesController::class, 'index']);
    });

Route::middleware([EnsureFrontendRequestsAreStateful::class])
    ->group(function () {
        Route::middleware('auth:sanctum')
            ->post('/settings', [SettingsController::class, 'index']);
    });

Route::middleware([EnsureFrontendRequestsAreStateful::class])
    ->group(function () {
        Route::middleware('auth:sanctum')
            ->post('/logs', [LogsController::class, 'index']);
    });

Route::middleware([EnsureFrontendRequestsAreStateful::class])
    ->group(function () {
        Route::middleware('auth:sanctum')
            ->post('/support', [SupportController::class, 'index']);
    });

Route::middleware([EnsureFrontendRequestsAreStateful::class])
    ->group(function () {
        Route::middleware('auth:sanctum')
            ->post('/billing', [BillingController::class, 'index']);
    });

Route::middleware('auth:sanctum')
    ->post('backups', [BackupController::class, 'index']);

Route::middleware('auth:sanctum')
    ->post('roles', [RolesController::class, 'index']);

// This route is only for testing purposes. It should be removed in production.
if (app()->environment(['local', 'testing'])) {
    Route::middleware('auth:sanctum')->get('/test-auth', [
        TestAuthController::class,
        'check',
    ]);
}
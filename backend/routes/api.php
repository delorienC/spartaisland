<?php
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\EmployeesController;
use App\Http\Controllers\Api\ExercisesController;
use App\Http\Controllers\Api\WorkoutsController;
use App\Http\Controllers\Api\MembershipController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestAuthController;

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
Route::middleware('auth:sanctum')->post('/membership', [
    MembershipController::class,
    'index',
]);

Route::middleware([EnsureFrontendRequestsAreStateful::class])
    ->group(function () {
        Route::middleware('auth:sanctum')
            ->post('/employees', [EmployeesController::class, 'index']);
    });

Route::middleware('auth:sanctum')->post('/exercises', [
    ExercisesController::class,
    'index',
]);

Route::middleware('auth:sanctum')->post('/workouts', [
    WorkoutsController::class,
    'index',
]);

// This route is only for testing purposes. It should be removed in production.
if (app()->environment(['local', 'testing'])) {
    Route::middleware('auth:sanctum')->get('/test-auth', [
        TestAuthController::class,
        'check',
    ]);
}
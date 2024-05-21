<?php

use App\Http\Controllers\AssignedTasksController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TeamMembersController;
use App\Http\Controllers\TeamProjectsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/me', [AuthController::class, 'me']);
})->middleware(['api']);



Route::middleware(['auth:api', 'api'])->group(function () {
    Route::apiResource('project.tasks', TaskController::class)->shallow();
    Route::apiResource('teams', TeamController::class);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('projects', ProjectController::class);
    Route::apiResource('users', UserController::class);
    Route::apiResource('assignedtasks', AssignedTasksController::class);

    Route::apiResource('team.members', TeamMembersController::class)->parameters([
        'member' => 'user'
    ]);
    Route::resource('team.projects', TeamProjectsController::class)->only(['store']);
});

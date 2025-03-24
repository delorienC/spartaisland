<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    public function index()
    {
        return response()->json([
            [
                'id' => 1,
                'name' => 'Employees',
            ]
        ]);
    }
}

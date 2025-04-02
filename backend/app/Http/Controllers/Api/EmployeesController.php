<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employees;

class EmployeesController extends Controller
{
    public function index()
    {
        return Employees::all();
    }
}

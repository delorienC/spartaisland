<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestAuthController extends Controller
{
    public function check(Request $request)
    {
        return response()->json(['authenticated' => true, 'user' => $request->user()]);
    }
}

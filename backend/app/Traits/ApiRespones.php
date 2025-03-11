<?php

namespace App\Traits;

trait ApiRespones
{
    protected function ok($message, $data, $statusCode = 200)
    {
        return $this->success($message, $data, $statusCode);
    }

    protected function success($message, $data, $statusCode = 200)
    {
        return response()->json([
            'data' => $data,
            'message' => $message,
            'status' => $statusCode,
        ], $statusCode);
    }

    protected function error($message, $statusCode = 200)
    {
        return response()->json([
            'message' => $message,
            'status' => $statusCode,
        ], $statusCode);
    }
}

<?php

namespace App\Helpers;

use Carbon\Carbon;
use Illuminate\Support\DateFactory;

class DataFormatHelper
{
  public function formatDate($value): ?string
  {
    return $value ? Carbon::parse($value)->format(env('DATE_FORMAT')) : null;
  }
}

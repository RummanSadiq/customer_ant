<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductReview extends Model
{
    protected $fillable = [
        "user_id", "product_id", "rating", "description"
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function product()
    {
        return $this->belongsTo('App\Product');
    }
}

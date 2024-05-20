<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'created_by_user_id',
    ];

    public function created_by():BelongsTo
    {
        return $this->belongsTo(User::class,'created_by_user_id');
    }

    public function members():HasMany
    {
        return $this->hasMany(User::class);
    }
}

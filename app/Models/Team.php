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
    // retrieves the members of the team
    public function members():HasMany
    {
        return $this->hasMany(User::class);
    }
    // retrieves projects assigned to the team
    public function projects():HasMany
    {
        return $this->hasMany(Project::class);
    }
}

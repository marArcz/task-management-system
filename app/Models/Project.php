<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;


    protected $appends = [
        'start_date_str',
        'end_date_str',
    ];
    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
        'team_id',
    ];

    // get tasks
    public function tasks():HasMany
    {
        return $this->hasMany(Task::class);
    }

    public function getStartDateStrAttribute(): mixed
    {
        return date('M d, Y', strtotime($this->start_date));
    }
    public function getEndDateStrAttribute(): mixed
    {
        return date('M d, Y', strtotime($this->end_date));
    }

    protected function startDate(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => date('Y-m-d',strtotime($value)),
        );
    }

    protected function endDate(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => date('Y-m-d',strtotime($value)),
        );
    }

    protected $cast = [
        'start_date' => 'date',
        'end_date' => 'date',
    ];
}

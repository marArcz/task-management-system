<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    // append custom attribute
    protected $appends = ['dueDateStr'];
    protected $with = [
        'priority',
        'createdBy',
        'status'
    ];

    // define table columns that can be filled with user input.
    protected $fillable = [
        'title',
        'description',
        'due_date',
        'priority_id',
        'status_id',
        'assigned_to_user_id',
        'created_by_user_id',
        'project_id'
    ];

    // get status
    public function status():BelongsTo
    {
        return $this->belongsTo(TaskStatus::class);
    }

    // get priority
    public function priority():BelongsTo
    {
        return $this->belongsTo(Priority::class);
    }

    // get the user who created the task
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class,'created_by_user_id');
    }

     // get the user who received the task
     public function assignedTo(): BelongsTo
     {
         return $this->belongsTo(User::class,'assigned_to_user_id');
     }

     public function getDueDateStrAttribute(): mixed
     {
        return date('M d, Y',strtotime($this->due_date));
     }
}

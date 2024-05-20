<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            //
            $table->foreignId('priority_id')->references('id')->on('priorities')->cascadeOnDelete();
            $table->foreignId('task_status_id')->references('id')->on('task_statuses')->cascadeOnDelete();
            $table->foreignId('assigned_to_user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreignId('created_by_user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreignId('project_id')->references('id')->on('projects')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            //
            $table->dropConstrainedForeignId('priority_id');
            $table->dropConstrainedForeignId('task_status_id');
            $table->dropConstrainedForeignId('assigned_to_user_id');
            $table->dropConstrainedForeignId('created_by_user_id');
            $table->dropConstrainedForeignId('project_id');
        });
    }
};

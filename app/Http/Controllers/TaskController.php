<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use App\Models\Team;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Project $project)
    {
        $tasks = $project->tasks()->get();
        return response()->json($tasks);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Project $project)
    {
        $user = auth()->user();

        $data['title'] = $request->title;
        $data['description'] = $request->description;
        $data['due_date'] = $request->due_date;
        $data['priority_id'] = $request->priority_id;
        $data['status_id'] = $request->status_id;
        $data['assigned_to_user_id'] = $request->assigned_to_user_id;

        $task = $project->tasks()->create($data);

        return response()->json($task);

    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return response()->json($task);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $task->title = $request->title;
        $task->description = $request->description;
        $task->due_date = $request->due_date;
        $task->priority_id = $request->priority_id;
        $task->status_id = $request->status_id;
        $task->assigned_to_user_id = $request->assigned_to_user_id;

        $task->save();

        return response()->json($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json(['success' => true]);
    }
}

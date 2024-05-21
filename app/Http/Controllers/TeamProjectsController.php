<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $projects = $user->team->projects()->get();

        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Team $team)
    {
        $project['title'] = $request->title;
        $project['description'] = $request->description;
        $project['start_date'] = $request->start_date;
        $project['end_date'] = $request->end_date;

        $team->projects()->create($project);

        return response()->json($team);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $project->title = $request->title;
        $project->description = $request->description;
        $project->start_date = $request->start_date;
        $project->end_date = $request->end_date;

        $project->save();

        return response()->json([
            'success'=>true,
            'project'=>$project
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}

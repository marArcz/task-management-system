<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teams = Team::with(['created_by','members'])->get();

        return response()->json($teams);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // get user
        $user = $request->user();
        $name = $request->name;
        $description = $request->description;

        $team = Team::create([
            'name' => $name,
            'description' => $description,
            'created_by_user_id' => $user->id,
        ]);

        return response()->json([
            'success'=>true,
            'team' => $team
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        return response()->json($team);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team $team)
    {
          $name = $request->name;
          $description = $request->description;

          $team->update([
              'name' => $name,
              'description' => $description,
          ]);

          return response()->json([
              'success'=>true,
              'team' => $team
          ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        $team->delete();
        return response()->json(['success'=>true]);
    }
}

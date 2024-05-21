<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamMembersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Team $team)
    {
        $team->load(['members','created_by']);
        return response()->json($team);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Team $team)
    {
        // $users = User::doesntHave('team')->get();
        // $roles = Role::all();

        // return response()->json([
        //     'users' => $users,
        //     'team' => $team,
        //     'roles' => $roles
        // ]);
        return response()->json(['nessage'=>'hello']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request,Team $team)
    {
        $user_id = $request->user_id;
        $role_id = $request->role_id;

        $user = User::find($user_id);
        $user->role_id = $role_id;
        $user->save();

        $team->members()->save($user);

        return response()->json(['success'=>true]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team, User $user)
    {
        $user->team_id = null;
        $user->role_id = null;
        $user->save();

        return redirect(route('team.members.index',[$team->id]));
    }
}

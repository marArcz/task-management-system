<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //

    public function index(Request $request){
        $user = $request->user();
        $user->load(['team']);
        $projects = $user->team->projects()->get();

        return Inertia::render('Home',[
            'projects'=>$projects
        ]);
    }
}

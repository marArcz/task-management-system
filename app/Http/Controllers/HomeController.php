<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //

    public function index(){
        $users = User::all();
        return Inertia::render('Home',[
            'users'=>$users,
        ]);
    }
}

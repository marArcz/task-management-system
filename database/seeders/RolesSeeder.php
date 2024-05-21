<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Project Manager',
                'description' => 'Plans and defines project scope. Assigns tasks and responsibilities to team members'
            ],
            [
                'name' => 'Team Lead',
                'description' => 'Leading a specific subset of the team within the project. Assisting the project manager in task assignment'
            ],
            [
                'name' => 'Team Member',
                'description' => 'Completing assigned tasks within the specified deadlines. Reporting progress and any issues encountered.'
            ],
            [
                'name' => 'Quality Assurance (QA) Specialist',
                'description' => 'Reviewing and testing deliverables to ensure they meet quality standards. Identifying and reporting defects or issues.'
            ],
            [
                'name' => 'Resource Manager',
                'description' => 'Allocating and managing resources (e.g., personnel, equipment) for the project. Balancing workloads and preventing resource over-allocation.'
            ],
        ];

        foreach ($roles as $key => $role) {
            DB::table('roles')->insert($role);
        }
    }
}

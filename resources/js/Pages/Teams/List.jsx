import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const List = ({ auth, teams = [] }) => {
    console.log(teams)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teams</h2>}
        >
            <Head title="Teams" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
                <div className="text-end mb-3">
                    <Link href={route('teams.create')} className='btn btn-primary'>Add New</Link>
                </div>
                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <table className='table align-middle'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Members</th>
                                    <th>Created By</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams && teams.length > 0 ? (
                                    teams.map((team, index) => (
                                        <tr key={team.id}>
                                            <td>{team.name}</td>
                                            <td>{team.description}</td>
                                            <td>
                                                <Link className='link-primary underline'>{team.members? team.members.length:0} member/s</Link>
                                            </td>
                                            <td>{team.created_by?.name}</td>
                                            <td>
                                                <Link className='nav-link my-1 underline text-success' href={route('teams.update', { id: team.id })}>Edit</Link>
                                                <Link className='nav-link my-1 underline text-danger' method='delete' href={route('teams.destroy', { id: team.id })}>Delete</Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className='text-center'>Nothing to show.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default List

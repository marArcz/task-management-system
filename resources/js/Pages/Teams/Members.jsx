import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const Members = ({ auth, team = {} }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('teams.index')} className="text-secondary">Teams</Link> / {team.name}</h2>}
        >
            <Head title="Teams" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <p className="fs-5 fw-bold">{team.name}</p>
                        <p className="fs-6">{team.description}</p>

                        <div className="mt-3">
                            <p className='text-sm text-secondary'>Created By: <span>{team.created_by?.name}</span></p>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm mt-3">
                    <div className="card-header bg-white">
                        <div className="d-flex align-items-center">
                            <p className="my-1 fw-bold me-auto">Members</p>
                            <Link href={route('team.members.create', [team.id])} className='btn btn-sm btn-primary'>Add New</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className='table align-middle'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {team.members && team.members.length > 0 ? (
                                    team.members.map((member, index) => (
                                        <tr key={member.id}>
                                            <td>{member.name}</td>
                                            <td>{member.role.name}</td>
                                            <td>
                                                <Link className='nav-link my-1 underline text-danger' method='delete' href={route('team.members.destroy', { team: team.id, member: member.id })}>Remove</Link>
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

export default Members

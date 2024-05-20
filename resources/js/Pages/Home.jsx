import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Home({ auth, users = [], projects = [], tasks = [] }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Home" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <p className="p-6 fs-5 text-gray-900">Welcome to Task Management System!</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-2">
                {/* Teams */}
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header bg-white">
                        <div className="d-flex align-items-center">
                            <p className='my-2 fw-bold text-primary me-auto'>My team</p>
                        </div>
                    </div>
                    <div className="card-body">
                        {auth.user.team ? (
                            <div>
                                <p className="fs-5">{auth.user.team.name}</p>
                                <p className="">{auth.user.team.description}</p>
                            </div>
                        ) : (
                            <p className='text-sm text-secondary'>You don't belong to any team yet.</p>
                        )}
                    </div>
                </div>
                {/* tasks */}
                <div className="card border-0 shadow-sm mb-3">
                    <div className="card-header bg-white">
                        <div className="d-flex align-items-center">
                            <p className=' fw-bold my-2 me-auto'>Tasks</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive-sm">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th className='text-secondary'>Title</th>
                                        <th className='text-secondary'>Description</th>
                                        <th className='text-secondary'>Due date</th>
                                        <th className='text-secondary'>Priority</th>
                                        <th className='text-secondary'>Project</th>
                                        <th className='text-secondary'>Status</th>
                                        <th className='text-secondary'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tasks && tasks.length > 0 ? (
                                            tasks.map((task, index) => (
                                                <tr key={task.id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>{task.dueDateStr}</td>
                                                    <td>
                                                        {task.priority.name}
                                                    </td>
                                                    <td>
                                                        {task.status.description}
                                                    </td>
                                                    <td>
                                                        <Link href=''>Edit</Link>
                                                        <Link href=''>Delete</Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className='text-center text-secondary'>Nothing to show.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* projects */}
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header bg-white">
                        <div className="d-flex align-items-center">
                            <p className='my-2 fw-bold me-auto'>Team projects</p>
                            <Link href={route('projects.create')} className='btn btn-sm btn-success'>Add</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='text-secondary'>Title</th>
                                    <th className='text-secondary'>Description</th>
                                    <th className='text-secondary'>Starting Date</th>
                                    <th className='text-secondary'>Ending Date</th>
                                    <th className='text-secondary'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects && projects.length > 0 ? (
                                        projects.map((project, index) => (
                                            <tr key={project.id}>
                                                <td>{project.title}</td>
                                                <td>{project.description}</td>
                                                <td>{project.start_date}</td>
                                                <td>{project.end_date}</td>
                                                <td>
                                                    <Link href=''>Edit</Link>
                                                    <Link href=''>Delete</Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className='text-center text-secondary'>Nothing to show.</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

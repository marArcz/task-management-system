import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Users = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <p className="p-6 fs-5 text-gray-900">Welcome to Task Management System!</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="row">
                    <div className="col-md">
                        <DashboardCard title='Users' value={0} bg='bg-blue-500' />
                    </div>
                    <div className="col-md">
                        <DashboardCard title='Teams' value={0} bg='bg-slate-500' />
                    </div>
                    <div className="col-md">
                        <DashboardCard title='Projects' value={0} bg='bg-indigo-500' />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default Users

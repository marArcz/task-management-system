import DashboardCard from '@/Components/DashboardCard';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const Create = ({ auth, users = [],team={},roles=[] }) => {

    const { data, setData, post, processing, errors } = useForm({
        user_id: '',
        role_id:''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('team.members.store',[team.id]));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create a Team</h2>}
        >
            <Head title="Create Users" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
                <div className="text-end mb-3">
                    <Link onClick={() => history.back()} className='btn btn-sm btn-danger'>Cancel</Link>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <InputLabel htmlFor="user-id" value="User" />
                        <select className='form-control' name="user_id" id="user-id" value={data.user_id} onChange={(e) => setData('user_id', e.target.value)}>
                            <option value="">Select One</option>
                            {
                                users && users.map((user)=>(
                                    <option value={user.id} key={user.id}>{user.name}</option>
                                ))
                            }
                        </select>
                        <InputError required message={errors.user_id} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="role" value="Role" />
                        <select className='form-control' name="role_id" id="role" value={data.role_id} onChange={(e) => setData('role_id', e.target.value)}>
                            <option value="">Select One</option>
                            {
                                roles && roles.map((role)=>(
                                    <option value={role.id} key={role.id}>{role.name}</option>
                                ))
                            }
                        </select>
                        <InputError required message={errors.role_id} className="mt-2" />
                    </div>
                    <div className="mt-3">
                        <button className='btn btn-primary col-12' type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </AuthenticatedLayout>
    )
}

export default Create

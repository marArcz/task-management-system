import DashboardCard from '@/Components/DashboardCard';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const Create = ({ auth, roles = [], teams = [] }) => {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        name: '',
        password_confirmation: '',
        username: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('users.store'));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create a user</h2>}
        >
            <Head title="Create Users" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
                <div className="text-end mb-3">
                    <Link href={route('home')} className='btn btn-sm btn-danger'>Cancel</Link>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />

                        <InputError required message={errors.email} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="username" value="Username" />

                        <TextInput
                            id="username"
                            type="text"
                            name="username"
                            value={data.username}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('username', e.target.value)}
                        />

                        <InputError required message={errors.email} className="mt-2" />
                    </div>
                    {/* <div className="mb-3">
                        <InputLabel htmlFor="role" value="Role" />
                        <select required name="role" className='form-control' id="role" value={data.role_id} onChange={e => setData('role_id', e.target.value)}>
                            <option value="">Select One</option>
                            {roles && roles.map((role, index) => (
                                <option value={role.id}>{role.name}</option>
                            ))}
                        </select>
                        <InputError required message={errors.role_id} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="team" value="Team" />
                        <select required name="team" className='form-control' id="team" value={data.role_id} onChange={e => setData('role_id', e.target.value)}>
                            <option value="">Select One</option>
                            {teams && teams.map((team, index) => (
                                <option value={team.id}>{team.name}</option>
                            ))}
                        </select>
                        <InputError required message={errors.role_id} className="mt-2" />
                    </div> */}
                    <div className="mb-3">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError required message={errors.email} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError required message={errors.password} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="confirm-password" value="Confirm Password" />

                        <TextInput
                            id="confirm-password"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />

                        <InputError required message={errors.password_confirmation} className="mt-2" />
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

import DashboardCard from '@/Components/DashboardCard';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const Create = ({ auth, teams = [] }) => {

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        team_id: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('projects.store'));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create a project</h2>}
        >
            <Head title="Create Users" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
                <div className="text-end mb-3">
                    <Link href={route('home')} className='btn btn-sm btn-danger'>Cancel</Link>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <InputLabel htmlFor="title" value="Title" />
                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        <InputError required message={errors.title} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="description" value="Description" />
                        <textarea name="description" className='form-control' id='description' value={data.description} onChange={e => setData('description', e.target.value)}></textarea>
                        <InputError required message={errors.description} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="start_date" value="Starting date" />
                        <TextInput
                            id="start_date"
                            type="date"
                            name="start_date"
                            value={data.start_date}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('start_date', e.target.value)}
                        />
                        <InputError required message={errors.start_date} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="end_date" value="Ending date" />
                        <TextInput
                            id="end_date"
                            type="date"
                            name="end_date"
                            value={data.end_date}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('end_date', e.target.value)}
                        />
                        <InputError required message={errors.end_date} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="team" value="Team" />
                        <select required name="team" className='form-control' id="team" value={data.role_id} onChange={e => setData('role_id', e.target.value)}>
                            <option value="">Select One</option>
                            {teams && teams.map((team, index) => (
                                <option value={team.id}>{team.name}</option>
                            ))}
                        </select>
                        <InputError required message={errors.team_id} className="mt-2" />
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

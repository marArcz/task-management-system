import DashboardCard from '@/Components/DashboardCard';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const Create = ({ auth }) => {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('teams.store'));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create a Team</h2>}
        >
            <Head title="Create Users" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
                <div className="text-end mb-3">
                    <Link onClick={()=>history.back()}  className='btn btn-sm btn-danger'>Cancel</Link>
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
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError required message={errors.name} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="description" value="Description" />
                        <textarea name="description" className='form-control' id='description' value={data.description} onChange={e => setData('description', e.target.value)}></textarea>
                        <InputError required message={errors.description} className="mt-2" />
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

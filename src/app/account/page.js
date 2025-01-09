import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import grabUsername from '@/actions/GrabUsername';

export default async function AccountPage({ searchParams }) {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.preferredUsername;
    
    if (!session) {
        redirect('/');
    }
    return <div>
        <form action={grabUsername}>
            <h1 className='text-4xl font-bold text-center mb-2'>Grab Your Username</h1>
            <p className='text-center text-gray-600 mb-6'>Choose your username and get started.</p>
            <div className='max-w-xs mx-auto'>
                <input 
                name='preferredUsername'
                defaultValue={desiredUsername} 
                className="block p-2 border w-full mb-2 text-center" 
                type='text' 
                placeholder='Username' />
                <button className="bg-blue-500 text-white px-4 py-2 block w-full"
                type='submit'>Claim Username</button>
            </div>
        </form>
    </div>;
}

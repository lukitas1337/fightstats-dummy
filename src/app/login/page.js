import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function LoginPage() {
    return (
    <div>
        <div className="p-4 max-w-xs mx-auto">
            <h1 className='text-4xl font-bold text-center mb-2'>Sign In</h1>
            <p className='text-center text-gray-600 mb-6'>Sign in to your account using one of the methods below.</p>

        <button className='bg-blue-500 text-white py-4 text-center w-full flex gap-4 items-center justify-center'>
            <FontAwesomeIcon icon={faGoogle} className='icon-large'/>
            <span>Sign In with Google</span>
        </button>
        </div>
    </div>
    )
}
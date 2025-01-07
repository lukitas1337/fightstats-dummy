import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function LoginWithGoogle() {
    return (
        <button 
        className='bg-white shadow py-4 text-center w-full flex gap-4 items-center justify-center'>
            <FontAwesomeIcon icon={faGoogle} className='icon-large'/>
            <span>Sign In with Google</span>
        </button>
    );
}
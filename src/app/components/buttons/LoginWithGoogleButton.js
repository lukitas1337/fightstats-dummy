'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signIn } from 'next-auth/react';

export default function LoginWithGoogleButton() {
    return (
        <button 
        onClick={() => signIn('google')}
        className='bg-white shadow py-4 text-center w-full flex gap-4 items-center justify-center'>
            <FontAwesomeIcon icon={faGoogle} className='icon-large'/>
            <span>Sign In with Google</span>
        </button>
    );
}
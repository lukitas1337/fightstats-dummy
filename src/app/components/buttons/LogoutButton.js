'use client';

import { signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function LogoutButton() {
  return (
    <button
      className='flex gap-2 items-center border px-4 py-2 shadow'
      onClick={() => signOut()}
    >
      <span>Logout</span>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
}


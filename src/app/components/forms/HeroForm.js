'use client';

import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function HeroForm() {
useEffect(() => {
    if (
        'localStorage' in window &&
        window.localStorage.getItem('preferredUsername')
    ) {
        const username = window.localStorage.getItem('preferredUsername');
        window.localStorage.removeItem('preferredUsername');
        redirect('/account?preferredUsername=' + username);
    }
}, []);

const [username, setUsername] = useState('');
async function handleSubmit(e) {
    e.preventDefault();
if (username.length > 0) {
    window.localStorage.setItem('preferredUsername', username);
await signIn('google');
}
}

  return (
  
  <form
  onSubmit={handleSubmit}
   className='inline-flex items-center shadow-lg'>

  <span className='bg-white py-4 pl-4'>linklist.com/</span>
  <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='your-name' className='py-4'/>
  <button
    type='submit' className='bg-blue-500 text-white px-6 py-4'>Try For Free</button>
  
</form>
);
}

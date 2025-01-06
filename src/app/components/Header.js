import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route.js';

export default async function Header() {
  const session = await getServerSession(authOptions);

  console.log('Session:', session);

  return (
    <header className='bg-white border-b py-4'>
      <div className='max-w-4xl mx-auto flex justify-between px-8'>
        <div className='flex gap-6'>
          <Link href={'/'}>LinkList</Link>
          <nav className='flex items-center gap-4 text-slate-500 text-sm'>
            <Link href={'/about'}>About</Link>
            <Link href={'/pricing'}>Pricing</Link>
            <Link href={'/contact'}>Contact</Link>
          </nav>
        </div>
        <nav className='flex items-center gap-4 text-slate-500 text-sm'>
          {session ? (
            <>
              <span>Welcome, {session.user?.name}</span>
              <Link href={'/api/auth/signout'}>Sign Out</Link>
            </>
          ) : (
            <>
              <Link href={'/api/auth/signin'}>Sign In</Link>
              <Link href={'/api/auth/signin'}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';

export default function Header() {
  return (

    <header className='bg-white border-b  py-4'>
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
      <Link href={'/login'}>Sign In</Link>
      <Link href={'/signup'}>Create Account</Link>
    </nav>
    </div>
  </header>

  );
}
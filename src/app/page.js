import Link from 'next/link';

export default function Home() {
  return (
<main>
  <header className='bg-white border-b flex justify-between p-4'>
    <div className='flex items-center gap-4'>
      <Link href={'/'}>LinkList</Link>
      <nav className=' flex gap-4 text-slate-500'>
      <Link href={'/about'}>About</Link>
      <Link href={'/pricing'}>Pricing</Link>
      <Link href={'/contact'}>Contact</Link>
    </nav>
    </div>
    <div>
      <Link href={'/login'}>Sign In</Link>
      <Link href={'/signup'}>Register</Link>
    </div>
  </header>
  <section>

  </section>
  </main>
)
}

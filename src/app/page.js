import Header from './components/Header';

export default function Home() {
  return (
    
<main>
    <Header />
  <section className='p-8 pt-32 max-w-4xl mx-auto'>
    <div className='max-w-md mb-6'>
      <h1 className='text-6xl font-bold'>Your one link <br/> for everything</h1>
      <h2 className='text-xl text-gray-500 mt-6'>Share your links, social profiles, contact info and more on one page.</h2>
    </div>
    <form className='inline-flex items-center shadow-lg'>
      <span className='bg-white py-4 pl-4'>linklist.com/</span>
      <input type='text' placeholder='your-name' className='py-4'/>
      <button type='submit' className='bg-blue-500 text-white px-6 py-4'>Try For Free</button>
    </form>
  </section>
</main>
)
}

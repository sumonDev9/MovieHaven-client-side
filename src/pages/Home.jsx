import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import FeaturedMov from '../components/FeaturedMov';
import Footer from '../components/Footer';
import OnlineStreaming from '../components/OnlineStreaming';
import ComingSoon from '../components/ComingSoon';

const Home = () => {
  const moviedata = useLoaderData();
 
    return (
      <div className='bg-gray-100 dark:bg-slate-800 dark:text-white'>
          <nav>
    <Navbar></Navbar>
  </nav>
  <Banner></Banner>
 <main className='w-11/12 mx-auto'>
  {/* Featured Movies */}
  <section>
    <div className='mt-10 mb-5 border-l-8 border-pink-600 pl-4'>
      <h1 className='text-pink-600 text-3xl font-bold'>Featured Movies</h1>
    </div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {
      moviedata.map(srotMovie => <FeaturedMov key={srotMovie._id} srotMovie={srotMovie}></FeaturedMov>)
    }
  </div>
  <div className='flex justify-center pt-10'>
   <Link to='/allMovie'>
   <button className='bg-pink-500 py-2 px-3 text-white text-xl font-bold rounded-lg'>See all movies</button></Link>
  </div>
  </section>
  <section>
    <OnlineStreaming></OnlineStreaming>
  </section>
  <section>
    <ComingSoon></ComingSoon>
  </section>

 </main>
 <Footer></Footer>
      </div>
    );
};

export default Home;
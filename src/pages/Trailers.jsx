import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router-dom';
import Trailerscard from '../components/trailerscard';
import Footer from '../components/Footer';

const Trailers = () => {
    const [trailer, setTrailer] = useState([]);
    
    useEffect(() => {
        fetch('/trailers.json')
            .then(res => res.json())
            .then(data => setTrailer(data))
    }, [])
    return (
        <div className='dark:text-white  dark:bg-slate-800'>
            <Navbar></Navbar>
            <section className='w-11/12 py-10 mx-auto'>
                <div className="text-center py-6">
                    <h1 className="text-4xl font-bold text-primary dark:text-white tracking-wide">
                        Trailers
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-white mt-2">
                        Watch the latest and most exciting movie trailers here!
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        trailer.map(movieTrailer => <Trailerscard key={movieTrailer.id} movieTrailer={movieTrailer}></Trailerscard>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Trailers;
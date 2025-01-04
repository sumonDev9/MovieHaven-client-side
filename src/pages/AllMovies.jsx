import { useEffect, useState } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AllmoviesCard from '../components/AllmoviesCard';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
const AllMovies = () => {
    const [search, setSearch] = useState("");
    
    const moviesdata = useLoaderData();
    const [movies, setMovies] = useState(moviesdata);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        fetch(`https://movie-portal-server-side-puce.vercel.app/movie?searchParams=${search}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data);
            setLoading(false);
        })
    },[search]);
    
    return (
        <div className='dark:bg-slate-800 bg-white dark:text-white'>
            <ScrollRestoration></ScrollRestoration>
            <Navbar></Navbar>
            <section className='w-11/12 mx-auto'>
                <div className='pt-10'>
                    <h1 className='text-3xl text-primary dark:text-white font-bold text-center'>All Movie</h1>
                    {/*  */}
                    <div className='max-w-lg mx-auto mt-5'>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text"
                             onChange={(e) => setSearch(e.target.value)}
                            className="grow dark:text-black" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                </div>
           {
            loading? <Loading></Loading> : <div>
                {
                movies.length > 0 ? <div className='grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    movies.map(allmovie => <AllmoviesCard key={allmovie._id} allmovie={allmovie}></AllmoviesCard>)
                }
            </div>
            
            :

            <div className="flex  my-5 min-h-96  rounded-lg justify-center items-center gap-2 flex-col">
            <img src='https://i.ibb.co/fNHCKcb/error.webp' className="w-32" alt="" />
            <h1 className="text-primary dark:text-white font-bold text-3xl">No Data Found</h1>
            </div>

            }
            </div>     
           }
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AllMovies;
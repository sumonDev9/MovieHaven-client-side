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
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        setLoading(true)
        fetch(`https://movie-portal-server-side-puce.vercel.app/movie?searchParams=${search}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data);
            setLoading(false);
        })
    },[search]);
    
    const handleSortChange = (e) => {
        const order = e.target.value; // Get selected value
        const sortedMovies = [...movies].sort((a, b) => {
            return order === "asc" ? a.rating - b.rating : b.rating - a.rating;
        });
        setMovies(sortedMovies);
        setSortOrder(order);
    }
    return (
        <div className='dark:bg-slate-800 bg-white dark:text-white'>
            <ScrollRestoration></ScrollRestoration>
            <Navbar></Navbar>
            <section className='w-11/12 mx-auto'>
                <div className='pt-10'>
                    <h1 className='text-3xl text-primary dark:text-white font-bold text-center'>All Movie</h1>
                    <div className='flex pb-5 pt-5 md:pt-10 flex-col md:flex-row gap:4 md:gap-8'>
                   {/* search */}
                   <div className='bg-gray-100 dark:bg-slate-700 p-3 rounded-lg'>
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
                    {/* sort price */}
                    <div className='flex bg-gray-100 dark:bg-slate-700 p-2 rounded-md justify-between items-center w-full'>
                        <div className='hidden md:flex'>
                            <p className='text-primary dark:text-white font-medium text-2xl'>movie Of {movies.length}</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-2xl font-medium'>Sort by Rating:</p>
                            <div>
                            <select 
                            id="sort" 
                            value={sortOrder} 
                            onChange={handleSortChange} 
                            className="w-full py-2 px-4 border rounded-md bg-white dark:bg-slate-700 dark:text-white"
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                            </div>
                        </div>
                    </div>
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
import { useContext, useEffect, useState } from 'react';
import { Link, ScrollRestoration, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MdDelete, MdFavorite, MdUpdate } from "react-icons/md";
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { MovieContext } from '../Provider/MovieProvider';
const MovieDetalies = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    const { user } = useContext(MovieContext);
    useEffect(() => {
        fetch(`https://movie-portal-server-side-puce.vercel.app/movie/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    }, [id])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {


                    // delete rom the database
                    fetch(`https://movie-portal-server-side-puce.vercel.app/movie/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your users has been deleted.",
                                    icon: "success"
                                });

                             
                                navigate('/allMovie');
                            }
                        })
                }


            });
    }

    

    const handlefavorite = () => {
    
                const movieData = {
                    ...movie,
                    email: user.email
                };

                fetch('https://movie-portal-server-side-puce.vercel.app/favorites', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(movieData)
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if(data.insertedId){
                        Swal.fire({
                            icon: 'success',
                            title: 'Added to Favorites',
                            text: 'The movie has been added to your favorites!'
                        });
                        }
                        else{
                            Swal.fire({
                                icon: 'error',
                                title: "Already in Favorites",
                                 text: 'This movie is already in your favorites!'
                            })
                        }
                    })
         
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'There was an issue checking your favorites.'
                });
            });
    };


    const { _id, poster_url, movieTitle, genre = [], duration, rating, releaseYear, sumary } = movie;

    return (
        <div className='dark:text-white dark:bg-slate-800'>
            <ScrollRestoration></ScrollRestoration>
            <Navbar></Navbar>
            <section className='py-10 px-4'>
                <div className='text-center '>
                    <h1 className='text-primary dark:text-white font-semibold mb-2 text-3xl italic'>Movie Details</h1>
                    <p className='text-secondary dark:text-white text-2xl'>{movieTitle}</p>
                </div>
                <div className='max-w-5xl mx-auto mt-5 p-4 grid md:grid-cols-12 gap-5 shadow dark:bg-slate-800 bg-white border-2 border-[rgba(17, 17, 17, 0.1)] rounded-lg'>
                    <div className='col-span-6'>
                        <img src={poster_url} className='h-[450px] rounded-md w-full object-fit-cover' alt="" />
                    </div>
                    <div className='col-span-6 space-y-4'>
                        <h1 className='text-primary dark:text-white text-2xl font-bold'>{movieTitle}</h1>
                        <p>{sumary}</p>
                        <div>
                            <p className='flex gap-1 items-center'>
                                <span className='text-primary font-bold text-xl dark:text-white'>Genre:</span>
                                {
                                    genre.length > 0
                                        ? genre.map((category, index) => (
                                            <span key={index}>{category}{index < genre.length - 1 && ','} </span>
                                        ))
                                        : <span>Not Available</span>
                                }
                            </p>
                        </div>
                        <p><span className='text-primary font-bold text-xl dark:text-white'>Duration: </span>{duration} Minutes</p>
                        <p><span className='text-primary font-bold text-xl dark:text-white'>Rating: </span>{rating}</p>
                        <p><span className='text-primary font-bold text-xl dark:text-white'>Release Year: </span>{releaseYear}</p>
                        <div className='flex gap-3'>
                            <button onClick={() => handleDelete(_id)} className='btn rounded-lg flex items-center gap-1 text-white hover:bg-rose-600 bg-rose-500'><MdDelete className="flex" /> <span className='hidden md:flex'>Delete Movie</span><span className='flex md:hidden'>Delete</span></button>
                            <button onClick={handlefavorite} className='btn flex items-center gap-1 rounded-lg text-white hover:bg-pink-600 bg-pink-500'><MdFavorite className='flex ' /> <span className='hidden md:flex'>Favorite Movie</span><span className='flex md:hidden'>Favorite</span> </button>
                            <Link to={`/updated/${_id}`}>
                            <button className='btn flex items-center  gap-1 rounded-lg text-white hover:bg-pink-600 bg-pink-500'><MdUpdate className='flex' /><span className='hidden md:flex'>Updated Movie</span> <span className='flex md:hidden'>Update</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MovieDetalies;
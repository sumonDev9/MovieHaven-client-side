import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../Provider/MovieProvider';
import FavoriteList from '../components/FavoriteList';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';

const FavoriteMovies = () => {
    const { user } = useContext(MovieContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch(`https://movie-portal-server-side-puce.vercel.app/favorites/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setFavorites(data)
            })
    }, [user])


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
                    fetch(`https://movie-portal-server-side-puce.vercel.app/favorites/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your add to favorites movie has been deleted.",
                                    icon: "success"
                                });

                                const remainingMovie = favorites.filter(movies => movies._id !== id);
                                setFavorites(remainingMovie);

                            }
                          
                        })
                }


            });
    }

    return (
        <div className='dark:bg-slate-800 dark:text-white'>
            <Navbar></Navbar>
            <h1 className='pt-5 text-primary text-center text-3xl font-bold dark:text-white'>Your Favorite Movies</h1>
            <div>
            {favorites.length > 0 ? (
                <div className='py-8 grid mx-auto w-11/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        favorites.map((movie) => <FavoriteList key={movie._id} handleDelete={handleDelete} movie={movie}></FavoriteList>)

                    }
                </div>
            ) : (
                <div className='flex justify-center min-h-[300px] items-center py-20'>
                    <p className='text-primary dark:text-white text-2xl font-semibold'>You have no favorite movies.</p>
                </div>
            )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FavoriteMovies;
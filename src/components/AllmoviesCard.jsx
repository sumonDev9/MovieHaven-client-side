import React from 'react';
import { CiStar } from 'react-icons/ci';
import { MdAccessTime, MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AllmoviesCard = ({ allmovie }) => {
    const {_id, poster_url, movieTitle, genre, duration, rating, releaseYear } = allmovie;
    return (
      
        <div className="card dark:bg-slate-700 p-5 border-2 border-[rgba(19, 19, 19, 0.15)] bg-white shadow transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <figure className="rounded-lg">
        <img src={poster_url} className="w-full h-72 object-cover mx-auto rounded-lg" alt={movieTitle} />
    </figure>
    <div className="card-body mt-4 p-0">
        <h2 className="card-title text-primary dark:text-white text-2xl font-bold">{movieTitle}</h2>
        <div className='flex justify-between items-center'>
            <div>
                <p className='flex gap-1'>
                    {
                        genre.map((category, index) => (
                            <span key={index}>{category},</span>
                        ))
                    }
                </p>
            </div>
            <div>
                 <p className='flex items-center gap-2'><span className='text-primary dark:text-white font-semibold'><MdAccessTime /></span> {duration} min</p>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div>
                 <p className='text-secondary  text-xl dark:text-white font-semibold flex items-center gap-1'><span className='text-primary dark:text-white font-semibold'><CiStar className='text-2xl' /></span> {rating}</p>
            </div>
            <div>
                <p className='text-secondary dark:text-white text-lg flex items-center gap-2'><span className='text-primary font-semibold dark:text-white'><MdDateRange /></span> {releaseYear}</p>
            </div>
        </div>
        <div className="card-actions">
            <Link to={`/movie/${_id}`}>
                <button className="bg-pink-500 text-white py-2 px-3 rounded-md hover:bg-pink-600 transition duration-300">See Details</button>
            </Link>
        </div>
    </div>
</div>

    );
};

export default AllmoviesCard; 
//  {eco_friendly_features.map((feature, index) => (
//     <li key={index}>{feature}</li>
// ))}
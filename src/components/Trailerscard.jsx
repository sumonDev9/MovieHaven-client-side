import React from 'react';
import { FaPlay } from 'react-icons/fa6';

const Trailerscard = ({movieTrailer}) => {
    const {img, title, hours, genre} = movieTrailer;
    return (
        
            <div className="card bg-slate-600 rounded-lg shadow-xl">
                        <figure>
                            <img
                                className='w-full h-56 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'
                                src={img}
                                alt={title} />
                        </figure>
                        <div className="card-body">
                         <h2 className='text-white text-2xl font-bold'>{title}</h2>
                        <div className='flex justify-between items-center'>
                            <div>
                            <p className='text-white text-lg font-semibold'>
                         {
                             genre.length > 0
                                        ? genre.map((category, index) => (
                                            <span key={index}>{category}{index < genre.length - 1 && ','} </span>
                                        ))
                                        : <span>Not Available</span>
                                }
                         </p>
                            </div>
                            <div>
                                <p className='text-white font-semibold text-lg'>{hours} hrs</p>
                            </div>
                        </div>
                            <div className="card-actions justify-start">
                            <button className="flex gap-2 items-center px-3 py-2 text-white text-lg bg-pink-500 rounded-md"><FaPlay /> Play</button>

                            </div>
                        </div>
                    </div>

    );
};

export default Trailerscard;
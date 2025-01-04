import React from 'react';

const UpcomingCard = ({ upcomeing }) => {
    const { poster, title, language, releaseDate, genre } = upcomeing;
    return (
        <div className="card bg-base-100 rounded-md w-[300px] mx-4 shadow-xl">
            <figure>
                <img
                    src={poster}
                    alt="Shoes" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-primary text-xl dark:text-primary">{title}</h2>
                <div className='flex justify-between items-center'>
                    <div>
                    <p className='text-lg text-secondary dark:text-primary'>{language}</p>
                    </div>
                    <div className='text-lg text-secondary dark:text-primary'>
                        {releaseDate}
                    </div>
                </div>
                <p className='text-lg text-secondary dark:text-primary'>
                    {
                        genre.length > 0
                            ? genre.map((category, index) => (
                                <span key={index}>{category}{index < genre.length - 1 && ','} </span>
                            ))
                            : 
                        <span>Not Available</span>
                    }
                </p>
            </div>
        </div>
    );
};

export default UpcomingCard;
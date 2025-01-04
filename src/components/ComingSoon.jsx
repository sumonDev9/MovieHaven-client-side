import React, { useEffect, useState } from 'react';
import UpcomingCard from './UpcomingCard';
import Marquee from 'react-fast-marquee';

const ComingSoon = () => {
    const [upcomeing, setUpcomeing] = useState([]);

    useEffect(() => {
        fetch('/upcoming.json')
        .then(res => res.json())
        .then(data => setUpcomeing(data))
    }, []);
    return (
        <div>
            <div className='mt-5 border-l-8 border-pink-700 pl-4'>
                <h1 className='text-pink-600 text-3xl font-bold'>Upcoming Movies</h1>
            </div>
            <section className='mb-10'>
            <Marquee pauseOnHover={true} speed={50} className="pt-7">
                {
                    upcomeing.map(upcomeing => <UpcomingCard key={upcomeing} upcomeing={upcomeing}></UpcomingCard>)
                }
            </Marquee>
            </section>
        </div>
    );
};

export default ComingSoon;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-base-300 dark:bg-black dark:text-white'>
        <footer className="footer   mx-auto w-11/12  p-10">
        <aside>
        <img src="https://i.ibb.co/YTtqsbb/movie-haven-logo.png" className='w-12 h-12' alt="" />
        <p>MovieHaven</p>
                <p>Email: movieHaven@gmail.com</p>
                <p>Phone: +880-1234-567890</p>
    
  </aside>
            {/* <nav>
                <h6 className="footer-title">Contact Us</h6>
                <img src="https://i.ibb.co/YTtqsbb/movie-haven-logo.png" className='w-8 h-8' alt="" />
      
            </nav> */}
            
            <nav>
                <h6 className="footer-title">Qiuck Link</h6>
                <Link to='/' className="link link-hover">Home</Link >
                <Link to='/allMovie' className="link link-hover">All Movies</Link >
                <Link to='favoriteMovie' className="link link-hover">My Favorite</Link >
                <Link to='/trailers' className="link link-hover">Trailers</Link >
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://facebook.com" target="_blank" ><img className='w-10' src="https://i.ibb.co/Rb7H2bD/facebook.png" alt="" /></a>
                    <a href="https://instagram.com" target="_blank"><img className='w-10' src="https://i.ibb.co/Nnvgq3M/instagram.png" alt="" /></a>
                    <a href="https://twitter.com" target="_blank"><img className='w-10' src="https://i.ibb.co/23Fxr25/twitter.png" alt="" /></a>
                    <a href="https://linkedin.com" target="_blank"><img className='w-10' src="https://i.ibb.co/BN0wwGC/icons8-linkedin-48.png" alt="" /></a>
                </div>
            </nav>
        </footer>
        <hr className='w-11/12 mx-auto' />
        <footer className="footer footer-center  p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} MovieHaven. All Rights Reserved.</p>
            </aside>
        </footer>
    </div>
    );
};

export default Footer;
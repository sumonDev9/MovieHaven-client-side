import { useContext, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { MovieContext } from "../Provider/MovieProvider";


const Navbar = () => {
  const [dark, setDark] = useState(false);
  const { user, userLogout } = useContext(MovieContext);

  const links = <>
    <li><NavLink classList='dark:text-white' to='/'>Home</NavLink></li>
    <li><NavLink classList='dark:text-white' to='/allMovie'>All Movie</NavLink></li>
    {
      user && <>
        <li><NavLink classList='dark:text-white' to='/addMovie'>Add Movie</NavLink></li>
        <li><NavLink classList='dark:text-white' to='/favoriteMovie'>My Favorites</NavLink></li>
      </>
    }
    <li><NavLink classList='dark:text-white' to='/trailers'>Trailers</NavLink></li>
  </>

  // toggle
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="text-xl md:text-2xl text-primary font-semibold dark:text-white">MovieHaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu dark:text-white menu-horizontal px-1 gap-2">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-2">

            {
              user && user?.email ?
                <>
                  <div className="tooltip tooltip-bottom z-10" data-tip={user?.displayName}>
                    <div className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Profile Picture"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                  </div>
                  <button onClick={userLogout} className="px-2 py-1 md:px-3 md:py-2 dark:text-black rounded-md border-2 border-pink-500 bg-pink-500 text-white hover:text-black hover:dark:text-white hover:bg-transparent">Logout</button>

                </>
                :
                <>
                  <Link to="/auth/login" className="px-2 py-1 md:px-3 md:py-2 dark:text-white rounded-md hover:bg-pink-500 hover:text-white border-2 border-pink-500">
                    Login
                  </Link>
                  <Link to="/auth/registation" className="px-2 py-1 md:px-3 md:py-2 dark:text-black rounded-md border-2 border-pink-500 bg-pink-500 text-white hover:text-black hover:dark:text-white hover:bg-transparent">
                    Register
                  </Link>
                </>
             }


            {/* toggle theme */}
            <button onClick={() => darkModeHandler()}>
              {

                dark && <IoSunny className="dark:text-white text-xl" />
              }
              {
                !dark && <IoMoon className="dark:text-white text-xl" />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
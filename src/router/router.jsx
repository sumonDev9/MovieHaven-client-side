import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import AllMovies from "../pages/AllMovies";
import FavoriteMovies from "../pages/FavoriteMovies";
import AuthLayout from "../pages/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../Provider/privateRoute";
import MovieDetalies from "../pages/MovieDetalies";
import Updated from "../pages/Updated";
import Trailers from "../pages/Trailers";
import Error from "../pages/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('https://movie-portal-server-side-puce.vercel.app/movie/allMovie'),
    },
    {
      path: '/allMovie',
      element: <AllMovies></AllMovies>,
      loader: () => fetch('https://movie-portal-server-side-puce.vercel.app/movie'),
    },
    {
      path: '/addMovie',
      element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
    },
    {
      path: '/favoriteMovie',
      element: <PrivateRoute><FavoriteMovies></FavoriteMovies></PrivateRoute>,
    },
    {
      path: '/movie/:id',
      element: <PrivateRoute><MovieDetalies></MovieDetalies></PrivateRoute>,
      loader: ({params}) => fetch(`https://movie-portal-server-side-puce.vercel.app/movie/${params.id}`)
    },
    {
      path: '/updated/:id',
      element: <PrivateRoute><Updated></Updated></PrivateRoute>,
      loader: ({params}) => fetch(`https://movie-portal-server-side-puce.vercel.app/movie/${params.id}`)
    },
    {
      path: '/trailers',
      element: <Trailers></Trailers>,
    
    },
    {
      path: '/auth',
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: '/auth/login',
          element: <Login></Login>
        },
        {
          path: '/auth/registation',
          element: <Register></Register>
        }
      ]
    },
    {
      path: '*',
      element:<Error></Error>
    }
  ]);

export default router;
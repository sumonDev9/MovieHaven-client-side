import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MovieContext } from '../Provider/MovieProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {userLogin, setUser, logInbyGoogle} = useContext(MovieContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // login
        userLogin(email, password)
        .then(result => {
            setUser(result.user);
            e.target.reset();
            Swal.fire({
                title: 'Success!',
                text: 'The user login has been successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate(location.state ? location.state : "/");
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please check your credentials and try again!',
                confirmButtonText: 'OK',
                timer: 5000,
              });
          })
    }

    // google
    const handleGoogleSignIn = () => {
        logInbyGoogle()
          .then(result => {
            setUser(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'The user login has been successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate(location.state ? location.state : "/");
        })
          .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please check your credentials and try again!',
                confirmButtonText: 'OK',
                timer: 5000,
              });          
            })
    }
    

    return (
        <div>
        
        {/* main login page */}
        <div className="hero py-10"
        style={{
            backgroundImage: "url(https://i.ibb.co/qWDtN4Y/cool-background-1.png)",
        }}
          >
            <div className=' bg-white rounded-md items-start'>
                {/* login */}
                        <div className='shadow-2xl  rounded-md text-center p-6 md:w-[430px]'>
                            <h1 className='text-black font-bold  text-2xl'>Login into account</h1>
                            <p className='my-5 text-black opacity-60 mr-3 text-base font-semibold'>Use your credentials to access your account.</p>
                            <form onSubmit={handleLogin} className='space-y-5'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 text-primary opacity-60">
                                        <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="email" name='email' className="grow text-primary" placeholder="Email" />
                                </label>

                                <label className="input relative input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 text-primary opacity-60">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type={showPassword ? 'text' : 'password'} name='password' className="text-primary" placeholder='Password' />
                                    <button type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-6 text-primary mt-1'>
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye
                                         />
                                    }
                                </button>
                                </label>

                                <div className='flex justify-between items-center'>
                                    <div className="form-control">
                                        <label className="cursor-pointer flex items-center gap-2 justify-start">
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="label-text text-base">Remember me</span>
                                        </label>
                                    </div>
                                    <Link
                                        to='/auth/forgetpassword'

                                        className="text-base hover:underline text-blue-500 cursor-pointer">
                                        Forgot password?
                                    </Link>


                                </div>
                                
                                <div className='w-full'>
                                    <button className='btn btn-block bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-bold'>Login</button>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className='flex justify-center items-center gap-5'>
                                <img className='w-10 cursor-pointer' src="https://i.ibb.co/9VP9JBh/icons8-facebook-48.png" alt="" />
                                <button onClick={handleGoogleSignIn}>
                                    <img className='w-10 cursor-pointer' src="https://i.ibb.co/TcB5YZK/icons8-google-48.png" alt="" />
                                </button>
                                <img className='w-10 cursor-pointer' src="https://i.ibb.co/vV2LMGC/icons8-github-30.png" alt="" />
                            </div>
                            <div>
                                <p className='text-center text-base mt-3 md:text-lg ml-8'><span className='text-black opacity-60'>Don't have an account?</span> <Link to='/auth/registation' className='text-blue-500 hover:underline'>Register here</Link></p>
                            </div>
                        </div>
                </div>
        </div>
     </div>
    );
};

export default Login;
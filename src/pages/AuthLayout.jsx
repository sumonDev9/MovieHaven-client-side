import { Outlet } from 'react-router-dom';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <main>
            <Outlet></Outlet>
           </main>
            <div className=''>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default AuthLayout;
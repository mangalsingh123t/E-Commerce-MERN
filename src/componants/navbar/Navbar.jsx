import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import menu_icon from '../assets/menu1-icone.jpg';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {ShopContext} from '../context/ShopContext'
export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartCount, loginStatus, setLoginStatus } = useContext(ShopContext); // Get login status
    const [isMenuOpen, toggleMenu] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        setLoginStatus(false); // Update context login status
    };

    return (
        <div className='flex justify-between items-center p-5 shadow-custom-box-shadow bg-white'>
            {/* Logo Section */}
            <div className='flex items-center gap-2 sm:gap-4'>
                <img src={logo} alt="logo" className='w-8 h-10 sm:w-12 sm:h-12' />
                <p className='text-black text-xl sm:text-3xl font-bold'>SHOPPER</p>
            </div>

            {/* Menu Section */}
            <ul className={`${isMenuOpen ? 'flex-col absolute top-20 left-0 w-full bg-white shadow-md p-4 z-10' : 'hidden md:flex'
                } flex gap-6 sm:gap-8 text-gray-700 font-medium text-base sm:text-xl cursor-pointer transition-all duration-300`}>
                <li onClick={() => setMenu("shop")}><Link to="/" className={`hover:text-red-500 ${menu === "shop" && 'text-red-500'}`}>Shop</Link></li>
                <li onClick={() => setMenu("mens")}><Link to="/mens" className={`hover:text-red-500 ${menu === "mens" && 'text-red-500'}`}>Mens</Link></li>
                <li onClick={() => setMenu("womens")}><Link to="/womens" className={`hover:text-red-500 ${menu === "womens" && 'text-red-500'}`}>Womens</Link></li>
                <li onClick={() => setMenu("kids")}><Link to="/kids" className={`hover:text-red-500 ${menu === "kids" && 'text-red-500'}`}>Kids</Link></li>
            </ul>

            {/* Icons Section */}
            <div className='flex gap-4 sm:gap-6 items-center'>
                {loginStatus ? (
                    <button 
                        className='px-3 sm:px-8 sm:py-2 py-1 border border-gray-400 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors duration-200'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/login">
                        <button className='px-3 sm:px-8 sm:py-2 py-1 border border-gray-400 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors duration-200'>
                            Login
                        </button>
                    </Link>
                )}
                <Link to="/cart" className='relative'>
                    <img src={cart_icon} alt="cart_icon" className='w-6 h-6 sm:w-8 sm:h-8' />
                    <div className='flex justify-center items-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 text-white text-sm absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
                        {getTotalCartCount()}
                    </div>
                </Link>
                {/* Hamburger Icon for Small Screens */}
                <button className='md:hidden' onClick={() => toggleMenu(!isMenuOpen)}>
                    <img src={menu_icon} alt="menu_icon" className="w-5 sm:w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

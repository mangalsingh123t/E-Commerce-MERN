import './Navbar'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <>
            <div className='flex place-content-around  items-center p-3 custum-box-shadow'>
                <div className='flex gap-[10px] items-center'>
                    <img src={logo} alt=" " />
                    <p className='text-black text-3xl font-semibold'>SHOPPER</p>
                </div>

                <ul className='flex gap-8 text-custom-color-menu  font-medium text-xl cursor-pointer'>
                    <li onClick={() => setMenu("shop")  }><Link to="/"> Shop </Link>  {menu == "shop" ? <hr className='border-red-500  w-3/4 h-1' /> : <></>} </li>
                    <li onClick={() => setMenu("mens")}><Link to="/mens"> Mens </Link>   {menu == "mens" ? <hr className='border-red-500  w-3/4 h-1' /> : <></>}</li>
                    <li onClick={() => setMenu("womens")}><Link to="/womens"> Womens </Link>  {menu == "womens" ? <hr className='border-red-500  w-3/4 h-1' /> : <></>}</li>
                    <li onClick={() => setMenu("kids")}><Link to="/kids"> Kids </Link>  {menu == "kids" ? <hr className='border-red-500  w-3/4 h-1' /> : <></>}</li>
                </ul>

                <div className='flex gap-6' >
                    <Link to="/login"> <button className='px-8 pt-1 pb-1 mt-1 border border-gray-400 rounded-3xl outline-none text-gray-700 font-medium active:bg-slate-100' >Login</button> </Link>
                    <Link to="/cart">   <img src={cart_icon} alt="cart_icon" /> </Link>
                    <div className='flex place-content-center  w-[22px] h-[22px] rounded-xl bg-red-500 text-white ms-[-30px] mt-[-5px] text-[14px] ' >0</div>
                </div>
            </div>
        </>
    )
}

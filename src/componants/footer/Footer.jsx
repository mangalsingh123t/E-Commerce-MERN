import logo from '../assets/logo.png'
import instaIcon from '../assets/insta.png'
import lindnIcon from '../assets/linkdn.png'
import watsappIcon from '../assets/watsapp.jpeg'
export const Footer = () => {
   return (
      <>
         <div className='grid grid-cols-1 justify-items-center mt-3'>
            <div className='flex space-x-1'>
               <img src={logo} alt=" " />
               <p className='text-black text-3xl font-semibold pt-4'>SHOPPER</p>
            </div>
               <div>
               <ul className='flex justify-between sm:space-x-3 space-x-1 mt-4'>
                  <li>Company</li>
                  <li>Product</li>
                  <li>Offices</li>
                  <li>About</li>
                  <li>Contact</li>
               </ul>      
               </div>
            <div className='flex mt-3 justify-between space-x-3 mb-5'>
               <img src={instaIcon} width={20} alt="Instagram Icon" />
               <img src={lindnIcon} width={20} alt="Linkdn Icon" />
               <img src={watsappIcon} width={20} alt="Watsapp Icon" />
            </div>
         </div>
      </>
   )
}


import exclusive_image from '../assets/exclusive_image.png'
export const Offers = () => {
  return (
    <>
    <>
    <div >
    <div className="grid grid-cols-2 bg-custom-gradient items-center justify-items-center">
        <div>
         <h1>Exclusive</h1> 
         <h1>Offers For You</h1> 
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <button className="bg-red-500 p-3">Check now</button>
        </div>
         <div>
            <img src={exclusive_image} alt="offer_image" />
         </div>
    </div>
    </div>
    </>
    </>
  )
}

import { useContext } from "react"
import all_product from "../componants/assets/all_product"
import { ShopContext } from "../componants/context/ShopContext"
import cart_cross_icon from '../componants/assets/cart_cross_icon.png'
export const Card = () => {
  const { cartItems, removeFromCart ,getTotalCartAmount } = useContext(ShopContext)
  return (
    <>
      <div className="mx-40">
        <div className="flex justify-between items-center">
          <div>Products</div>
          <div>Title</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>Remove</div>
        </div>
        <hr />
        {
          all_product.map((item, index) => {
            if (cartItems[item.id] > 0) {
              return <div key={index} className="flex place-content-between items-center">
                <img className="w-16 m-1" src={item.image} alt="cart_image" />
                <p className="ms-[-90px]">{item.name.slice(0, 20)}</p>
                <p className="ms-[-120px]">${item.new_price}</p>
                <button className="ms-[-99px]">{cartItems[item.id]}</button>
                <p >${item.new_price * cartItems[item.id]}</p>
                <img onClick={() => { removeFromCart(item.id) }} src={cart_cross_icon} alt="cross-icon" />
              </div>
            }
            return null

          })
        }
        <hr />

        <div className="grid grid-cols-12 mt-7 ">
          <div className="col-span-6 ">
            <div className="text-xl font-semibold"> 
               Cart Details
            </div>
            <div className="flex justify-between pt-2">
            <div>
              Sub Total
            </div>
            <div>
              $0
            </div>
            </div>
            <hr />
            <div className="flex justify-between pt-2">
            <div>
              Shipping Fee
            </div>
            <div>
               Free
            </div>
            </div>
            <hr />
            <div className="flex justify-between pt-2">
            <div>
              Total
            </div>
            <div>
               {getTotalCartAmount()}
            </div>
            </div>
            <hr />
            <button className="bg-red-500 p-2 rounded-sm mt-4 text-white">PROCEED TO CHEXKOUT</button>
          </div>
          <div className="col-span-6 ms-20">
            <div className="py-2">If you have a promo code paste it here </div>
            <div>
              <input type="text" placeholder="promo code" className="py-2 px-5 outline-none bg-gray-200"/>
              <button type="submit" className="bg-black text-white p-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

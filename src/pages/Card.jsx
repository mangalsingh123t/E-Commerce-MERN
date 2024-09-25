import { useContext } from "react";
import { ShopContext } from "../componants/context/ShopContext";
import cart_cross_icon from '../componants/assets/cart_cross_icon.png';

export const Card = () => {
  const {allProducts, cartItems,removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  console.log(cartItems)
  console.log(allProducts)
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-6 sm:gap-4 text-center font-semibold">
          <div className="text-xs md:text-base">Products</div>
          <div className="text-xs md:text-base">Title</div>
          <div className="text-xs md:text-base">Price</div>
          <div className="text-xs md:text-base">Quantity</div>
          <div className="text-xs md:text-base">Total</div>
          <div className="text-xs md:text-base">Remove</div>
        </div>
        <hr className="my-4" />
        <div>
          {allProducts?.products?.map((item, index) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={index} className="grid grid-cols-6 gap-4 items-center text-center">
                 <div className="flex justify-center">
                 <img className="w-16 m-1 " src={item.image} alt="cart_image" />
                 </div>
                  <p>{item.name.slice(0, 15)}</p>
                  <p>${item.new_price}</p>
                  <button>{cartItems[item.id]}</button>
                  <p>${item.new_price * cartItems[item.id]}</p>
                  <div className="flex justify-center">
                  <img onClick={() => removeFromCart(item.id)} src={cart_cross_icon} alt="cross-icon" className="cursor-pointer" />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div><hr className="my-4" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-6 mt-7">
          <div className="md:col-span-6 col-span-12">
            <div className="text-xl font-semibold">Cart Details</div>
            <div className="flex justify-between pt-2">
              <div>Sub Total</div>
              <div>${getTotalCartAmount()}</div>
            </div>
            <hr />
            <div className="flex justify-between pt-2">
              <div>Shipping Fee</div>
              <div>Free</div>
            </div>
            <hr />
            <div className="flex justify-between pt-2">
              <div>Total</div>
              <div>${getTotalCartAmount()}</div>
            </div>
            <hr />
            <button className="bg-red-500 p-2 rounded-sm mt-4 text-white">PROCEED TO CHECKOUT</button>
          </div>
          <div className="md:col-span-6 col-span-12">
            <div className="py-2">If you have a promo code, paste it here:</div>
            <div className="flex">
              <input type="text" placeholder="Promo code" className="flex-grow py-2 px-3 md:px-5 outline-none bg-gray-200" />
              <button type="submit" className="bg-black text-white p-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

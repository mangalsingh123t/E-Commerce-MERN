import  { useState, useContext } from 'react';
import { ShopContext } from '../componants/context/ShopContext';
import cart_cross_icon from '../componants/assets/cart_cross_icon.png';
import axios from 'axios';
import { PopupModal } from '../componants/popupModal/PopupModal'; // Import the modal component

export const Card = () => {
  const { allProducts, cartItems, removeFromCart, getTotalCartAmount,handlePaymentSuccess } = useContext(ShopContext);

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State for the message in the modal

  // Function to load the Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Function to handle payment using Razorpay
  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript();

    if (!isLoaded) {
      alert('Failed to load Razorpay SDK');
      return;
    }

    // Create order on the backend
    const orderResponse = await axios.post('http://localhost:9090/api/razorpay/create-order', {
      amount: getTotalCartAmount(), // Total amount to be paid
    });

    const { orderId } = orderResponse.data;

    // Razorpay options
    const options = {
      key: 'rzp_test_FzNm8xwjZR6SCt', // Replace with your Razorpay key ID
      amount: getTotalCartAmount() * 100, // Amount in paise (INR smallest unit)
      currency: 'INR',
      name: 'ShopEase',
      description: 'Payment',
      order_id: orderId, // Razorpay order ID from the backend
      handler: function (response) {
        // Payment success handler
        setModalMessage(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        setShowModal(true); // Show the modal when payment is successful
         handlePaymentSuccess()
      },
      prefill: {
        name: 'Customer Name',
        email: 'mangal@.com',
        contact: '6267058448',
      },
      theme: {
        color: '#F37254',
      },
    };

    // Open Razorpay payment modal
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      {/* Popup Modal */}
      <PopupModal
        show={showModal}
        onClose={() => setShowModal(false)} // Close the modal when the close button is clicked
        message={modalMessage}
      />

      {/* Rest of your cart code */}
      <div className="container mx-auto px-4 mt-5">
        {/* Header */}
        <div className="grid grid-cols-6 sm:gap-4 text-center font-semibold">
          <div className="text-xs md:text-base">Products</div>
          <div className="text-xs md:text-base">Title</div>
          <div className="text-xs md:text-base">Price</div>
          <div className="text-xs md:text-base">Quantity</div>
          <div className="text-xs md:text-base">Total</div>
          <div className="text-xs md:text-base">Remove</div>
        </div>
        <hr className="my-4" />

        {/* Cart Items */}
        <div>
          {allProducts?.products?.map((item, index) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={index} className="grid grid-cols-6 gap-4 items-center text-center">
                  <div className="flex justify-center">
                    <img className="w-16 m-1" src={item.image} alt="cart_image" />
                  </div>
                  <p>{item.name.slice(0, 15)}</p>
                  <p>{item.new_price}</p>
                  <button>{cartItems[item.id]}</button>
                  <p>{item.new_price * cartItems[item.id]}</p>
                  <div className="flex justify-center">
                    <img
                      onClick={() => removeFromCart(item.id)}
                      src={cart_cross_icon}
                      alt="cross-icon"
                      className="cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out"
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <hr className="my-4" />
      </div>

      {/* Cart Summary */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-6 mt-7">
          <div className="md:col-span-6 col-span-12">
            <div className="text-xl font-semibold">Cart Details</div>
            <div className="flex justify-between pt-2">
              <div>Sub Total</div>
              <div>{getTotalCartAmount()}</div>
            </div>
            <hr />
            <div className="flex justify-between pt-2">
              <div>Shipping Fee</div>
              <div>Free</div>
            </div>
            <hr />
            <div className="flex justify-between pt-2">
              <div>Total</div>
              <div>{getTotalCartAmount()}</div>
            </div>
            <hr />

            {/* Checkout Button */}
            <button
              onClick={handlePayment}
              className="bg-red-500 p-3 rounded-md mt-4 text-white font-semibold hover:bg-red-600 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
              Buy Now
            </button>
          </div>

          {/* Promo Code Section */}
          <div className="md:col-span-6 col-span-12">
            <div className="py-2">If you have a promo code, paste it here:</div>
            <div className="flex">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-grow py-2 px-3 md:px-5 outline-none bg-gray-200 rounded-l-md focus:ring-2 focus:ring-blue-300 transition-all"
              />
              <button
                type="submit"
                className="bg-black text-white p-3 rounded-r-md font-semibold hover:bg-gray-800 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

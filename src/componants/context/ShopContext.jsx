/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [loginStatus, setLoginStatus] = useState(!!localStorage.getItem("auth-token")); // New state for login status

    const token = localStorage.getItem("auth-token");

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:9090/products");
            setAllProducts(response.data);
            if (token) {
                try {
                    const response = await axios.post("http://localhost:9090/getCartData", "", {
                        headers: {
                            'auth-token': token
                        }
                    });
                    setCartItems(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log("Error fetching products", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [loginStatus]);

    const addToCart = async (itemId) => {
        if (token) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            try {
                await axios.post("http://localhost:9090/addToCart", { "itemId": itemId }, {
                    headers: {
                        'auth-token': token
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        }  
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            try {
                await axios.post("http://localhost:9090/removeFromCart", { "itemId": itemId }, {
                    headers: {
                        'auth-token': token
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const product = allProducts.products.find(product => product.id === Number(itemId));
                totalAmount += product.new_price * cartItems[itemId];
            }
        }
        return totalAmount;
    };

    const getTotalCartCount = () => {
        let totalCartCount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalCartCount += cartItems[itemId];
            }
        }
        return totalCartCount;
    };

    const logout = () => {
        localStorage.removeItem("auth-token");
        setCartItems(getDefaultCart()); // Clear cart data on logout
        setLoginStatus(false); // Update login status
    };

    const handlePaymentSuccess = async () => {
        try {
          const response = await axios.post("http://localhost:9090/payment-success", "", {
            headers: {
              'auth-token': token
            }
          });
      
          if (response.data.success) {
            // Clear the cart in frontend
            setCartItems(getDefaultCart());
            console.log("Cart cleared successfully!");
          }
        } catch (error) {
          console.log("Failed to clear cart", error);
        }
      };

    const contextValue = { 
        allProducts, 
        cartItems, 
        addToCart, 
        removeFromCart, 
        getTotalCartAmount, 
        getTotalCartCount, 
        loginStatus, 
        setLoginStatus,
        logout,
        handlePaymentSuccess
    };
    
   

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

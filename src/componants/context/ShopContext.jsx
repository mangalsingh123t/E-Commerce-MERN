/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import allProducts from "../assets/all_product"
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allProducts.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const product = allProducts.find(product => product.id === Number(itemId));
                totalAmount += product.new_price * cartItems[itemId];
            }
        }
        console.log(totalAmount);
        return totalAmount;
    };

    const getTotalCartCount = () => {
        let totalCartCount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalCartCount += cartItems[itemId]
            }
        }
        console.log(totalCartCount);
        return totalCartCount;
    };





    const contextValue = { allProducts, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartCount }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
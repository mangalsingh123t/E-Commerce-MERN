/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
// import allProducts from "../assets/all_product"
export const ShopContext = createContext(null);
import axios from "axios";

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const fetchProdcuts = async () => {
        try {
            const response = await axios.get("http://localhost:9090/products")
            setAllProducts(response.data)
            console.log("All Products fetchd Succesfully",response.data)
        } catch (error) {
            console.log("Error fetching products", error)
        }
    }

    useEffect(() => {
        fetchProdcuts()
    }, [])


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
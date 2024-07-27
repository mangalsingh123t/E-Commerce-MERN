/* eslint-disable react/prop-types */
import { createContext } from "react";
import allProducts from "../assets/all_product"
export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
 const contextValue = {allProducts}
 return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
 )
}

export default ShopContextProvider
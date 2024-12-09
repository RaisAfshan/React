import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({children})=>{

    const [cartCount,setCartCount] = useState(0);

    const HandlerCartIncrement = ()=>{
        setCartCount(cartCount+1) 
    }

    return(
        <CartContext.Provider value={{cartCount,HandlerCartIncrement}}>

                {children}

        </CartContext.Provider>
    )
}

export {CartContext,CartContextProvider}
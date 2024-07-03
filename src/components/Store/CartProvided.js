import React from "react";
import Context from "./Cart-context";

function CartProvided(props) {
    const additemtocarthandler =(props)=>{

    }
    const removeitemfromcarthandler = () =>{

    }
    const cartcontext = {
        items:[],
        totalAmount :0,
        additem : additemtocarthandler,
        removeitem :removeitemfromcarthandler
    };

  return <Context.Provider value={cartcontext}> {props.children}</Context.Provider>;
}

export default CartProvided;

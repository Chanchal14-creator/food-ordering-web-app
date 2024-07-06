import React, { useReducer } from "react";
import Context from "./Cart-context";

const defaultcartstate = {
  items: [],
  totalamount: 0,
};

const cartreducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedtotalamount = state.totalamount + action.item.price * action.item.amount;
    const existingcartitemindex = state.items.findIndex(item =>item.id ===action.item.id);
    const existingcartitem = state.items[existingcartitemindex];
    let updateditem;
    let updateditems;

    if(existingcartitem)
    {
      updateditem = {
        ...existingcartitem,
        amount: existingcartitem.amount+action.item.amount
      };
      updateditems = [...state.items];
      updateditems[existingcartitemindex] =updateditem;

    }
    else{

      updateditems = state.items.concat(action.item);
    }
    return {
      items: updateditems,
      totalamount: updatedtotalamount,
    };
  }
  if (action.type ==='REMOVE' )
    {
      const existingcartitem = state.items.findIndex(item =>item.id ===action.id)
      const existingitem = state.items[existingcartitem];
      const updatedtotalamount = state.totalamount-existingitem.price;
      let updateditems;
      if(existingcartitem.amount ===1)
      {
        updateditems = state.items.filter(item=> item.id !==action.id);
      }
      else{
        const updateditem = {
          ...existingitem,amount :existingitem.amount - 1
        };
        updateditems = [...state.items];
        updateditems[existingcartitem]=updateditem;
      }
    
 
  return (
    {
      items :updateditems,
      totalamount: updatedtotalamount
    });
  };
  return defaultcartstate;
};



function CartProvided(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartreducer,
    defaultcartstate
  );

  const additemtocarthandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeitemfromcarthandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalamount,
    addItem: additemtocarthandler,
    removeItem: removeitemfromcarthandler,
  };

  return (
    <Context.Provider value={cartcontext}> {props.children}</Context.Provider>
  );
}

export default CartProvided;

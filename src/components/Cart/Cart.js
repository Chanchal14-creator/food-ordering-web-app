import React from "react";
import Modal from '../UI/Modal';
import classes from "./cart.module.css";
function Cart(props) {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "SUSHI", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal hide={props.hidecart}>
     {cartitems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>35.90</span>
      </div>
      <div className={classes.actions}> 
      <button onClick ={props.hidecart} className={classes['button--alt']}>close</button>
      <button className={classes.button}>Order</button></div>
    </Modal>
  );
}

export default Cart;

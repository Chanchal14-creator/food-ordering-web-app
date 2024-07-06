import react,{ useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import Context from "../Store/Cart-context";
import CartItem from './CartItem';
function Cart(props) {
  const cartctx = useContext(Context);
  const hasitems = cartctx.items.length > 0;

  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const cartitemremovehandler = (id) => {
    cartctx.removeItem(id);
  } 
  const cartitemaddhandler = (item) =>{
    cartctx.addItem({...item,amount:1});
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartitemremovehandler.bind(null, item.id)}
          onAdd={cartitemaddhandler.bind(null, item)}
        />
      ))}
    </ul>
  );
 
  return (
    <Modal hide={props.hidecart}>
      {cartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hidecart} className={classes["button--alt"]}>
          close
        </button>
        {hasitems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

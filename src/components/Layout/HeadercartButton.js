import React, { useContext } from 'react'
import classes from './HeadercartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import Context from '../Store/Cart-context';


function Button(props) {
  const cartctx = useContext(Context);
  const noofcartitems = cartctx.items.reduce((curnumber,item)=>{return curnumber+item.amount},0 );
  return ( <button onClick={props.onclick} className={classes.button}>
    <span className={classes.icon}> 
      <CartIcon/>
    </span>
    <span >Your CART</span>
    <span className={classes.badge}>{noofcartitems}</span>
  </button>
  );
};

export default Button;

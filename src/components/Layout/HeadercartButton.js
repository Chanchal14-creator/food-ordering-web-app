import React from 'react'
import classes from './HeadercartButton.module.css';
import CartIcon from '../Cart/CartIcon';
function Button(props) {
  return ( <button onClick={props.onclick} className={classes.button}>
    <span className={classes.icon}> 
      <CartIcon/>
    </span>
    <span >Your CART</span>
    <span className={classes.badge}>3</span>
  </button>
  );
};

export default Button;

import React, { useContext, useEffect, useState } from "react";
import classes from "./HeadercartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Context from "../Store/Cart-context";

function Button(props) {
  const [buttonishighlighted, setbuttonishighlighted] = useState(false);
  const cartctx = useContext(Context);
  const { items } = cartctx;
  const noofcartitems = items.reduce((curnumber, item) => {
    return curnumber + item.amount;
  }, 0);

  const btnclasses = `${classes.button} ${
    buttonishighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbuttonishighlighted(true);
    const timer = setTimeout(() => {
      setbuttonishighlighted(false);
    }, 300);

    return () =>{
      clearTimeout(timer); 
    }
  }, [items]);

  return (
    <button onClick={props.onclick} className={btnclasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your CART</span>
      <span className={classes.badge}>{noofcartitems}</span>
    </button>
  );
}

export default Button;

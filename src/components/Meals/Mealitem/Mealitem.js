import React, {useContext} from "react";
import classes from "./Mealitem.module.css";
import Mealitemform from "./Mealitemform";
import Context from "../../Store/Cart-context";
function Mealitem(props) {

  const cartctx =useContext(Context);

  const addtocardhandler = (enteredAmount) =>{
    cartctx.addItem({
      id:props.id,
      name:props.name,
      amount:enteredAmount,
      price:props.price
    });
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
          <h3 >{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <Mealitemform onAddtoCart = {addtocardhandler}/>
    </li>
  );
}

export default Mealitem;

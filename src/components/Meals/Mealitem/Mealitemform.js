import React,{useRef,useState} from "react";
import classes from "./Mealitemform.module.css";
import Input from "../../UI/Input";

function Mealitemform(props) {

const amountinputref = useRef();

const [amountisvalid,setamountisvalid] = useState(true);
  
const submitHandler = (event) =>{
    event.preventDefault();

    const enteredAmount =amountinputref.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0||enteredAmountNumber<1||enteredAmountNumber>5)
    {
      setamountisvalid(false);
      return;
    }
    props.onAddtoCart(enteredAmountNumber);
  } ;

  return (
    <form className={classes.form} onSubmit={submitHandler
    }>
      <Input
      ref={amountinputref}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" >+ADD</button>
      {!amountisvalid && <p>please enter a valid amount</p>}
    </form>
  );
}

export default Mealitemform;

import React, { Fragment } from "react";
import mealsImage from "../../assets/meal.png";
import classes from "./Header.module.css";
import Button from "./HeadercartButton";
function Header( props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Reactmeals</h1>
        <Button onclick= {props.showcart}/>
      </header>
      <div className={classes['main_image']}>
        <img src={mealsImage} al="A table full of delicios food " />
      </div>
    </Fragment>
  );
}

export default Header;

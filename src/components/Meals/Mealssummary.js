import React from "react";
import classes from "./Mealssummary.module.css";
function Mealssummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, delivered to you</h2>
      <p>
        choose your favourite meal from oour broad selection of available mals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingreients, just-in-time and
        of course ny experienced chefs!
      </p>
    </section>
  );
}

export default Mealssummary;

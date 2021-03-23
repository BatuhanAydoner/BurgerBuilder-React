import React from "react";
import Aux from "../../../hoc/Auxiliary";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(
    (igKey, index) => {
      return (
        <li key={index}>
          {igKey}: {props.ingredients[igKey]}
        </li>
      );
    }
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout</p>
    </Aux>
  );
};

export default OrderSummary;

import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

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
      <p>Total Price: {props.price.toFixed(2)}</p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;

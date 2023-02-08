import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "./Compteur";

function Counter() {
  const value = useSelector((state) => state.value);
  console.log(value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Counter: <span id="value">{value}</span>
      </h1>
      <button id="increment" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button id="decrement" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <label htmlFor="amountInput">Increment by:</label>
      <input type="number" id="amountInput" />
      <button
        id="incrementByAmount"
        onClick={() => {
          const amountInput = document.getElementById("amountInput");
          const amount = parseInt(amountInput.value, 10) || 0;
          dispatch(incrementByAmount(amount));
        }}
      >
        Increment By Amount
      </button>
    </div>
  );
}

export default Counter;

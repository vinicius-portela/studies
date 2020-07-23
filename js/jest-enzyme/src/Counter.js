import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state === 0) return 0;
      return state - 1;
  }
}

const Counter = () => {
  const [counter, dispatchCounter] = useReducer(reducer, 0);

  return (
    <div>
      <h1>This is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button
        id="increment-btn"
        onClick={() => dispatchCounter({ type: "increment" })}
      >
        Increment
      </button>
      <button
        id="decrement-btn"
        onClick={() => dispatchCounter({ type: "decrement" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";
import "../App.css";

const FApp = () => {
  const [counter, setCounter] = useState(0);
  const incrementItem = () => setCounter(counter + 1);
  const decrementItem = () => setCounter(counter - 1);
  return (
    <div className="center">
      <div>Function {counter}</div>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
};

export default FApp;

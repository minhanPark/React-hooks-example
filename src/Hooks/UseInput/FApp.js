import React, { useState } from "react";
import "../App.css";

const useInput = initalValue => {
  const [value, setValue] = useState(initalValue);
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange };
};

const FApp = () => {
  const text = useInput("");
  return (
    <div className="center">
      <div>Function Input</div>
      <input placeholder="write text" {...text} />
    </div>
  );
};

export default FApp;

import React, { useState, useEffect } from "react";
import "../App.css";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setState({
      x: window.scrollX,
      y: window.scrollY
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const FApp = () => {
  const { y } = useScroll();
  return (
    <div className="center">
      <div style={{ color: y > 100 ? "red" : "blue" }}>FUseScroll</div>
    </div>
  );
};

export default FApp;

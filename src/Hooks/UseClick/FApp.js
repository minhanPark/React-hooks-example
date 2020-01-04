import React, { useEffect, useRef } from "react";
import "../App.css";

const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const FApp = () => {
  const sayHello = () => console.log("hello!@");
  const title = useClick(sayHello);
  return (
    <div className="center">
      <div ref={title}>FUseClick</div>
    </div>
  );
};

export default FApp;

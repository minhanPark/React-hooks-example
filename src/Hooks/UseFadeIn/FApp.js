import React, { useRef, useEffect } from "react";
import "../App.css";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const FApp = () => {
  const fadeInDiv = useFadeIn(5, 5);
  return (
    <div className="center">
      <div {...fadeInDiv}>FUseFadeIn</div>
    </div>
  );
};

export default FApp;

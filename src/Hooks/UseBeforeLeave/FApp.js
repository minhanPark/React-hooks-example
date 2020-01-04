import React, { useEffect } from "react";
import "../App.css";

const useBeforeLeave = onBefore => {
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const FApp = () => {
  const dontLeaveMe = () => {
    console.log("날 두고 가지마!");
  };
  useBeforeLeave(dontLeaveMe);
  return (
    <div className="center">
      <div>FUseBefore</div>
    </div>
  );
};

export default FApp;

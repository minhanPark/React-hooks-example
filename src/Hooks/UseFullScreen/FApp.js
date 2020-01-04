import React, { useRef } from "react";
import "../App.css";

const useFullScreen = () => {
  const element = useRef();
  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitScreen = () => {
    document.exitFullscreen();
  };
  return { element, triggerFullScreen, exitScreen };
};

const FApp = () => {
  const { element, triggerFullScreen, exitScreen } = useFullScreen();
  return (
    <div className="center">
      <div>FUseFullScreen</div>
      <div ref={element}>
        <img src="https://www.surfertoday.com/images/stories/seawater4.jpg" />
        <button onClick={triggerFullScreen}>Close Full Screen</button>
      </div>
      <button onClick={exitScreen}>Request Full Screen</button>
    </div>
  );
};

export default FApp;

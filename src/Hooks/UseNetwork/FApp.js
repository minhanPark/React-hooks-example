import React, { useEffect, useState } from "react";
import "../App.css";

const useNetwork = onNetwork => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    onNetwork(navigator.onLine);
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const FApp = () => {
  const sayOnOff = online => {
    console.log(online ? "You are In" : "You are Out");
  };
  const online = useNetwork(sayOnOff);
  return (
    <div className="center">
      <div>FUseNetwork {online ? "Online" : "Offline"}</div>
    </div>
  );
};

export default FApp;

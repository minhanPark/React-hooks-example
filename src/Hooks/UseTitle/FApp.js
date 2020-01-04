import React, { useState, useEffect } from "react";
import "../App.css";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const FApp = () => {
  const titleUpdate = useTitle("로딩중");
  setTimeout(() => titleUpdate("react hooks"), 5000);
  return (
    <div className="center">
      <div>FUseTitle</div>
    </div>
  );
};

export default FApp;

import React, { useState } from "react";
import "../App.css";

const contents = [
  { tab: "Section1", content: "this is Section1 content" },
  { tab: "Section2", content: "this is Section2 content" }
];

const useTap = (initialTap, allContents) => {
  const [prevTab, setPrevTab] = useState(initialTap);
  return {
    currentTab: allContents[prevTab],
    setCurrentTab: setPrevTab
  };
};

const FApp = () => {
  const { currentTab, setCurrentTab } = useTap(0, contents);
  return (
    <div className="center">
      <div>Function Tab</div>
      <div>
        {contents.map((content, index) => (
          <button key={index} onClick={() => setCurrentTab(index)}>
            {content.tab}
          </button>
        ))}
        <div>{currentTab.content}</div>
      </div>
    </div>
  );
};

export default FApp;

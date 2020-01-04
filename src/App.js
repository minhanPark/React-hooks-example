import React from "react";
import { FApp as FUseCounter, CApp as CUseCounter } from "./Hooks/UseCounter";
import { FApp as FUseInput, CApp as CUseInput } from "./Hooks/UseInput";
import { FApp as FUseTab, CApp as CUseTab } from "./Hooks/UseTap";
import { FApp as FUseTitle } from "./Hooks/UseTitle";
import { FApp as FUseClick } from "./Hooks/UseClick";
import { FApp as FUseBeforeLeave } from "./Hooks/UseBeforeLeave";
import { FApp as FUseFadeIn } from "./Hooks/UseFadeIn";
import { FApp as FUseNetwork } from "./Hooks/UseNetwork";
import { FApp as FUseScroll } from "./Hooks/UseScroll";
import { FApp as FuseFullScreen } from "./Hooks/UseFullScreen";
import { FApp as FUseAxios } from "./Hooks/UseAxios";

function App() {
  return (
    <div className="App">
      <FUseCounter />
      <CUseCounter />
      <hr />
      <FUseInput />
      <CUseInput />
      <hr />
      <FUseTab />
      <CUseTab />
      <hr />
      <FUseTitle />
      <hr />
      <FUseClick />
      <hr />
      <FUseBeforeLeave />
      <hr />
      <FUseFadeIn />
      <hr />
      <FUseNetwork />
      <hr />
      <FUseScroll />
      <hr />
      <FuseFullScreen />
      <hr />
      <FUseAxios />
    </div>
  );
}

export default App;

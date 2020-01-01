import React from "react";
import { FApp as FUseCounter, CApp as CUseCounter } from "./Hooks/UseCounter";
import { FApp as FUseInput, CApp as CUseInput } from "./Hooks/UseInput";

function App() {
  return (
    <div className="App">
      <FUseCounter />
      <CUseCounter />
      <hr />
      <FUseInput />
      <CUseInput />
      <hr />
    </div>
  );
}

export default App;

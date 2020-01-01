import React from "react";
import { FApp as FUseCounter, CApp as CUseCounter } from "./Hooks/UseCounter";

function App() {
  return (
    <div className="App">
      <FUseCounter />
      <CUseCounter />
      <hr />
    </div>
  );
}

export default App;

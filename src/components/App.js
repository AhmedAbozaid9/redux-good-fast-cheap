import React from "react";

import "../index.css";
import ToggleButton from "./ToggleButton";

function App() {
  return (
    <>
      <h1 className="title">How do you want your project to be ?</h1>
      <div className="buttons">
        <ToggleButton text="Good" />
        <ToggleButton text="Cheap" />
        <ToggleButton text="Fast" />
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";

import FunctionComp from "./FunctionComp";
import ClassComp from "./ClassComp";

export default function MainComponent() {
  let [inventory, setInventory] = useState(0);

  const handleIncrement = () => {
    setInventory(inventory + 1);
  };

  const handleDecrement = () => {
    setInventory(inventory - 1);
  };

  return (
    <div style={{ height: "50%" }}>
      <h1>Exercise Three: Function vs. Class Component</h1>
      <div className="gridContainer">
        <FunctionComp carMake={"Ford"} carModel={"Focus"} inventory={inventory} />
        <ClassComp carMake={"Chevy"} carModel={"Impala"} inventory={inventory} />
      </div>
      <div>
        Add to inventory:
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

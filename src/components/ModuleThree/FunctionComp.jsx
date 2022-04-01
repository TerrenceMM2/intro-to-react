import React, { useState, useEffect } from "react";

export default function FunctionComp({ carMake, carModel, inventory }) {
  // Handling State
  const [carColor, setCarColor] = useState("#42a5f5");
  const [carCost, setCarCost] = useState(18000);
  const [original, setOriginal] = useState(true);

  // Lifecycle Hook
  // componentDidMount
  useEffect(() => {
    setTimeout(() => {
      setCarColor("#1de9b6");
      setOriginal(false);
    }, 5000);
  }, []); // Empty dependency array tells React to execute once after component has mounted.

  const handleInput = (event) => {
    // Updating State using useState hook()
    setCarCost(event.target.value);
  };

  // Rendering
  return (
    <div style={{ padding: 10, backgroundColor: carColor }}>
      <h2>Functional Car</h2>
      <em>{original ? "Original" : "Updated"}</em>
      <p>Make: {carMake}</p>
      <p>Model: {carModel}</p>
      <p>Cost: ${carCost}</p>
      <label>Change Value:</label>
      <input onChange={handleInput}></input>
      <p>Units available: {inventory}</p>
    </div>
  );
}

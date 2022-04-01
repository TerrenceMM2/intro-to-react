import React, { useState } from "react";

import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [parentState, setParentState] = useState("Hello There. 👋");
  const [sharedState, setSharedState] = useState("Tennessee");
  const [childState, setChildState] = useState("Sup ... ✌");

  const handleInput = (event) => {
    setSharedState(event.target.value);
  };

  return (
    <div>
      <h1>Exercise Two: State & Props</h1>
      <div style={{ padding: 10, backgroundColor: "#b39ddb" }}>
        <p>Parent Component</p>
        <p>🎤 The parent says, "{parentState}"</p>
        <p>👂 The parent hears the child say, "{childState}"</p>
        <p>🌎 I live in {sharedState}</p>
        <ChildComponent greeting={childState} setChildState={setChildState} sharedState={sharedState} />
      </div>
      <label>Family Location: </label>
      <input onChange={handleInput}></input>
    </div>
  );
}

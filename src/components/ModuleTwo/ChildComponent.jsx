import React from "react";

export default function ChildComponent(props) {
  const handleInput = (event) => {
    props.setChildState(event.target.value);
  };

  return (
    <div style={{ padding: 10, backgroundColor: "#80cbc4" }}>
      <p>Child Component</p>
      <p>🎤 The child says, "{props.greeting}"</p>
      <p>🌎 I live in {props.sharedState}</p>
      <input onChange={handleInput}></input>
    </div>
  );
}

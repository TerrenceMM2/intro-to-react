import React from "react";

export default function ModuleOne() {
  const d = new Date();
  const string = "Hello, there! We used JSX to build this component.";
  const boolean = true;

  return (
    <div>
      <h1>Module One: JSX</h1>
      <p>{string.toLowerCase()}</p>
      <p>
        It is currently {d.toLocaleDateString()} {d.toLocaleTimeString()}
      </p>
      {boolean ? <p>React is awesome! 🥳</p> : <p>React is terrible! 😡</p>}
    </div>
  );
}

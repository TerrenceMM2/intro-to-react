import React from "react";

import "./index.css";

const styles = {
  paragraphB: {
    backgroundColor: "#8c9eff",
    padding: 10,
  },
  paragraphC: {
    backgroundColor: "#00e676",
    padding: 10,
  },
  input: {
    padding: 10,
  },
};

export default function index() {
  return (
    <div>
      <h1>Exercise Four: HTML & CSS in React</h1>
      <h2>Styling</h2>
      <p>
        📍 The Style attribute in React accepts a JS object with camelCased properties. Property values must be a string
        or integer. 'px' suffix is automatically added to integers.
      </p>
      <p style={{ padding: 10, backgroundColor: "#ff5252" }}>Paragraph A: I am styled with inline styling.</p>
      <p style={styles.paragraphB}>Paragraph B: I am styled with a styles object.</p>
      <p style={styles.paragraphC}>
        Paragraph C: I am also styled with the same styles object but a different property.
      </p>
      <p>📍 'class' is now 'className'.</p>
      <p className="paragraphD">Paragraph D: I am styled with an external stylesheet.</p>
      <p>📍 For input labels, 'for' is now 'htmlFor'</p>
      <div style={styles.input}>
        <label htmlFor="username">Input Here 👉</label>
        <input type="text" id="username"></input>
      </div>
    </div>
  );
}

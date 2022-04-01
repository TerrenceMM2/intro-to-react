import React, { Component } from "react";

export default class ClassComp extends Component {
  // Handling State and Props
  constructor(props) {
    super(props);

    this.state = {
      carColor: "#ef5350",
      carCost: 18000,
      original: true,
    };
  }

  handleInput = (event) => {
    // Updating State using setState()
    this.setState({
      carCost: event.target.value,
    });
  };

  // Lifecycle Method
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inventory !== this.props.inventory) {
      this.setState({
        original: false,
      });
    }
  }

  // Rendering
  render() {
    return (
      <div style={{ padding: 10, backgroundColor: this.state.carColor }}>
        <h2>Class Car</h2>
        <em>{this.state.original ? "Original" : "Updated"}</em>
        <p>Make: {this.props.carMake}</p>
        <p>Model: {this.props.carModel}</p>
        <p>Cost: ${this.state.carCost}</p>
        <label>Change Value:</label>
        <input onChange={this.handleInput}></input>
        <p>Units available: {this.props.inventory}</p>
      </div>
    );
  }
}

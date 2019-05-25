import React, { Component } from "react";
import QuoteMachine from "./quoteMachine";

class App extends Component {
  state = {
    currentColor: "#e74c3c",
    colors: [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857"
    ]
  };

  componentDidMount() {
    this.changeColor();
  }

  changeColor = () => {
    this.setState({
      currentColor: this.state.colors[
        Math.floor(Math.random() * this.state.colors.length)
      ]
    });
  };
  render() {
    document.getElementById(
      "body"
    ).style.backgroundColor = this.state.currentColor;
    return (
      <div className="App" id="app">
        <QuoteMachine id="machine" changeColor={this.changeColor} />
      </div>
    );
  }
}

export default App;

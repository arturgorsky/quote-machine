import React, { Component } from "react";
import QuoteMachine from "./quoteMachine";

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
        <QuoteMachine id="machine" />
      </div>
    );
  }
}

export default App;

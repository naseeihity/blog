import React, { Component } from "react";
import Container from "./Container";
import Ribbon from "./Ribbon";

class App extends Component {
  render() {
    return (
      <div>
        <Ribbon />
        <Container />
      </div>
    );
  }
}

export default App;

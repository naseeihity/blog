import React, { Component } from "react";
import Container from "./Container";
import Ribbon from "../Ribbon";
import Nav from "../Header/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
          <Ribbon />
        </header>
        <Container />
      </div>
    );
  }
}

export default App;

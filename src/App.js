import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import PersonProfile from "./Components/PersonProfile";
//import QUNT from "../public/quantum.jpg";
class App extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  Toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <Button variant="light" onClick={this.Toggle}>
          {this.state.show ? "Hide" : "Show"}{" "}
        </Button>
        {this.state.show ? <PersonProfile /> : null}
      </div>
    );
  }
}

export default App;

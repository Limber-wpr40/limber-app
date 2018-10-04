import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Geolocation from "./Geolocation";
import Demo from './Demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Geolocation />
        <h2>The slider is below</h2>
   <Demo />
      </div>
    );
  }
}

export default App;

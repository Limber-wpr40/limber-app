import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Geolocation from "./Geolocation";
import Demo from './Demo';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Geolocation />
   {routes}
      </div>
    );
  }
}

export default App;

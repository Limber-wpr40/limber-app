import React, { Component } from "react";
import "./App.css";
import Geolocation from "./Geolocation";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="App">
          <Geolocation />
          {routes}
        </div>
      </div>
    );
  }
}

export default App;

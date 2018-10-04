import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Geolocation from './Geolocation';
import Messages from './Components/Messages/Messages';
import Demo from './Demo';
import routes from './routes';

class App extends Component {
  render() {
    return (
<div className="Navbar">
        {/* <Geolocation /> */}
        <Messages />
      <div className="App">
        <Geolocation />
   {routes}
      </div>
      </div>
    );
  }
}

export default App;

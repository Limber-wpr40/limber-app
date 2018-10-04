import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Geolocation from './Geolocation';
import Messages from './Components/Messages/Messages';

class App extends Component {

 
  render() {

   

    return (
<div className="Navbar">
        {/* <Geolocation /> */}
        <Messages />
      </div>
    );
  }
}

export default App;

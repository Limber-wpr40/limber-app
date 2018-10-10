import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import Geolocation from './Geolocation';
import Messages from './Components/Messages/Messages';
import Feed from './Components/Feed/Feed';
import Chat from './Components/Chat/Chat';
import Demo from './Demo';


import Nav from './Nav/Nav';
import routes from './routes';


class App extends Component {
  render() {
    return (
<div className="Navbar">
       
        {/* <Messages /> */}
        {/* <Chat /> */}
      <div className="App">
        {/* <Nav /> */}
        {/* <Geolocation /> */}
        {routes}
      </div>
      </div>
    );
  }
}

export default App;

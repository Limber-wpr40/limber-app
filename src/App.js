import React, { Component } from 'react';
import './App.css';
import Geolocation from './Geolocation';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';

class App extends Component {

 
  render() {

   

    return (
      <div className="App">
        <Nav />
        <Geolocation />
        <Landing />
      </div>
    );
  }
}

export default App;

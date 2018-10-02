import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Geolocation from './Geolocation';

class App extends Component {

 
  render() {

   

    return (
      <div className="App">
        <Geolocation />
      </div>
    );
  }
}

export default App;

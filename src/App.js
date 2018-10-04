import React, { Component } from 'react';
import './App.css';
import Geolocation from './Geolocation';
import Nav from './Nav/Nav';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Geolocation />
        {routes}
      </div>
    );
  }
}

export default App;

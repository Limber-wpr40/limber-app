import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


import './ChatNav.css'

export default class ChatNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    axios.get("/api/settings").then(response => {
      this.setState({ userData: response.data });
      console.log('this is the data',this.state.userData)
    });
  }

  render() {
    return (
      <div className="chatnav">
        
        <nav className="navbar navbar-expand-sm">
        <Link to='/messages'>
        <i className="fas fa-arrow-left arrow-icon"/>
        </Link>
        <div className="profile-img">
            <img className="profile-img" src={`./images/${this.state.userData.user_image}`} alt=""/>
        </div>
        <i className="fas fa-flag flag-icon"></i>
        </nav>
        
      </div>
    )
  }
}

import React, { Component } from 'react';
import pic from '../Messages/pic2.jpg';
import { Link } from "react-router-dom";


import './ChatNav.css'

export default class ChatNav extends Component {
  render() {
    return (
      <div className="chatnav">
        
        <nav className="navbar navbar-expand-sm">
        {/* <Link to='/messages'> */}
        <i className="fas fa-arrow-left arrow-icon"/>
        {/* </Link> */}
        <div className="profile-img">
            <img className="profile-img" src={pic} alt=""/>
        </div>
        <i className="fas fa-flag flag-icon"></i>
        </nav>
        
      </div>
    )
  }
}

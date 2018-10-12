import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './ChatNav.css'

export default class ChatNav extends Component {

  componentDidMount() {
      console.log('this is the data',this.state)

  }

  render() {
    return (
      <div className="chatnav">
        
        <nav className="navbar navbar-expand-sm">
        <Link to='/messages'>
        <i className="fas fa-arrow-left arrow-icon"/>
        </Link>
        <div className="profile-img">
            {/* <img className="profile-img" src={`../images/${this.state.match_image}`} alt=""/> */}
         
        </div>
        <i className="fas fa-flag flag-icon"></i>
        </nav>
        
      </div>
    )
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ChatNav.css";


export default class ChatNav extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="chatnav">
        <nav className="chat-navbar navbar-expand-sm">
          <Link to="/messages">
            <i className="fas fa-arrow-left arrow-icon" />
          </Link>
     
            <img
              className="profile-img"
              src={`../images/${this.props.match_image}`}
              alt=""
            />
        
          <i className="fas fa-flag flag-icon" />
        </nav>
      </div>
    );
  }
}

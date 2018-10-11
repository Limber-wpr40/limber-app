import React, { Component } from "react";
import tinder from "../Messages/tinder.png";
import chat from "../Messages/chat.png";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Messages.css";

export default class Messages extends Component {
  constructor() {
    super();

    this.state = {
      newMatches: [],
      matches: [],
      user_id: 176
    };
  }

  componentDidMount() {
    axios.get("/api/newmatches/176").then(response => {
      this.setState({
        newMatches: response.data
      });
    });
    axios.get("/api/matches/176").then(response => {
      console.log(response.data)
      this.setState({
        matches: response.data
      });
    });
  }

  handleClick(match_id) {
    // const user_id = 176;
    this.setState({
      match_id: match_id
    });
    console.log(match_id);
    // console.log(this.state.user_id, this.state.match_id);

    //  axios.get('/api/messages', user_id, match_id)
  }

  render() {
    let displayNewMatches = this.state.newMatches.map(newmatch => {
      return (
        <div key={newmatch.match_id}>
          <Link to={{pathname:`/chat/${newmatch.match_id}`,
           state:this.state.user_id}}>
            <img
              className="image-icon"
              onClick={() => this.handleClick(newmatch.match_id)}
              src={`../images/${newmatch.user_image}`}
              alt={newmatch.match_id}
            />
          </Link>
        </div>
      );
    });

    let displayMatches = this.state.matches.map(match => {
      return (
        <div key={match.match_id}>
          <Link to={{pathname:`/chat/${match.match_id}`,
           state:this.state.user_id}}>
            <img
              className="image-icon"
              onClick={() => this.handleClick(match.match_id)}
              src={`../images/${match.user_image}`}
              alt={match.match_id}
            />
          </Link>
        </div>
      );
    });

    return (
      <div>
        <div className="navbar">
          <Link to="/landing">
            <img
              className="tinder-icon"
              src={tinder}
              style={{ width: "40px", height: "40px" }}
              alt='logo'
            />
          </Link>
          <Link to="/chat">
            <img
              className="chat-icon"
              src={chat}
              style={{ width: "50px", height: "50px" }}
              alt='chat'
            />
          </Link>
        </div>
        <div className="text">
          <h2 className="messages-tab">Messages</h2>

          <h2 className="feed-tab">Feed</h2>
        </div>

        <div className="text-border" />

        <div className="input">
          <input type="text" placeholder="Search Matches" />
        </div>

        <div className="matches">
          <h4>New matches</h4>

          <div className="images-wrapper">{displayNewMatches}</div>
        </div>

        <div className="messages">
          <h4>Messages</h4>
          <div className="images-wrapper">{displayMatches}</div>
        </div>

        </div>
    );
  }
}

import React, { Component } from "react";
import tinder from "../Messages/tinder.png";
import chat from "../Messages/chat.png";
import pic1 from "../Messages/pic2.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import Chat from "../Chat/Chat";
import "./Messages.css";

export default class Messages extends Component {
  constructor() {
    super();

    this.state = {
      matches: [],
      user_id: 176
      // match_id: 0
    };
  }

  componentDidMount() {
    axios.get("/api/matches/176").then(response => {
      console.log(response.data);
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
    let displayMatches = this.state.matches.map(match => {
      console.log(this.state.user_id);
      return (
        <Link to={`/chat/${match.match_id}`}>
          <div key={match.match_id}>
            <img
              className="image-icon"
              onClick={() => this.handleClick(match.match_id)}
              src={`../images/${match.user_image}`}
              alt={match.match_id}
            />
          </div>
        </Link>
      );
    });
    return (
      <div>
        <div className="navbar">
          <img
            className="tinder-icon"
            src={tinder}
            style={{ width: "40px", height: "40px" }}
          />
          <img
            className="chat-icon"
            src={chat}
            style={{ width: "50px", height: "50px" }}
          />
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

          <div className="images-wrapper">{displayMatches}</div>
        </div>

        <div className="messages">
          <h4>Messages</h4>
        </div>
      </div>
    );
  }
}

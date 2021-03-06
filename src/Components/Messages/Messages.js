import React, { Component } from "react";
import tinderLogo from '../../logos/tinder_grey.png';
import tinderChat from '../../logos/chattinder.png';
import axios from "axios";
import { Link } from "react-router-dom";
import "./Messages.css";

export default class Messages extends Component {
  constructor() {
    super();

    this.state = {
      newMatches: [],
      matches: [],
      user_id: "",
      match_id: "",
      match_image: "",
      first_name: ''
    };
  }

  componentDidMount() {
    const matchesCall = async () => {
      let userInfo = await axios.get("api/settings");
      this.setState({ user_id: userInfo.data.user_id });
      console.log(this.state.user_id);

      let newMatchGroup = await axios.get(
        `/api/newmatches/${this.state.user_id}`
      );
      this.setState({
        newMatches: newMatchGroup.data
      });

      let matchGroup = await axios.get(`/api/matches/${this.state.user_id}`);
      this.setState({
        matches: matchGroup.data
      });
    };
    matchesCall();
  }

  handleClick(match_id) {
    this.setState({
      match_id: match_id
    });
  }

  render() {
    let displayNewMatches = this.state.newMatches.map(newmatch => {
      return (
        <div key={newmatch.match_id}>
          <Link
            to={{
              pathname: `/chat`,
              state: {
                user_id: this.state.user_id,
                match_id: this.state.match_id,
                match_image: this.state.user_image
              }
            }}
            >
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
        <div key={match.match_id} className="matches-link">
          <Link
            to={{
              pathname: `/chat`,
              state: {
                user_id: match.user_id,
                match_id: match.match_id,
                match_image: match.user_image,
                first_name: match.first_name
              }
            }}
            >
          <div className='match-wrapper'>
            <img
              className="image-icon"
              onClick={() => this.handleClick(match.match_id)}
              src={`../images/${match.user_image}`}
              

              alt={match.match_id}
              />
            <div className='name-display'>{match.first_name}</div>
              </div>
            <span className="line-image"></span>
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
              src={tinderLogo}
              style={{ width: "40px", height: "40px" }}
              alt="logo"
            />
          </Link>

          <img
            className="chat-icon"
            src={tinderChat}
            style={{ width: "50px", height: "50px" }}
            alt="chat"
          />
        <div className="text">
          <h2 className="messages-tab">Messages</h2>
          <Link to="/feed">
            <h2 className="feed-tab">Feed</h2>
          </Link>
        </div>
        </div>

          <input className="search-matches-input" type="text" placeholder="Search Matches"/>

        <div className="matches">
          <h4 className="new-matches-list">New Matches</h4>

          <div className="new-images-wrapper">{displayNewMatches}</div>
        </div>

        <div className="messages">
          <h4 className="messages-h4">Messages</h4>
          <div className="images-wrapper">{displayMatches}</div>
        </div>
      </div>
    );
  }
}

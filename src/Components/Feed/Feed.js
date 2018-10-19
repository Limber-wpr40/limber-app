import React, { Component } from "react";
import "./Feed.css";

import axios from "axios";
import ChatNav from "../Chat/ChatNav";

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchFeed: [],
      user_id: 176
    };
  }

  componentDidMount() {

    const feedCall = async () => {
      let userInfo = await axios.get("api/settings");
      this.setState({ user_id: userInfo.data.user_id });
    

      let newFeed = await axios.get(
        `/api/newmatches/${this.state.user_id}`
      );
      this.setState({
        matchFeed: newFeed.data
      });
      
    };
    feedCall();
  }

  render() {

    let myFeed = this.state.matchFeed.map(feed => {
      return (
        <div className="feed-body" key={feed.match_id}>
          <div className="feed-head">
            <img
              className="feed-pic"
              src={`../images/${feed.user_image}`}
              alt={feed.first_name}
            />
            <div className="feed-name">{feed.first_name}</div>
          </div>
          <img
            className="feed-img"
            src={`../images/${feed.user_image}`}
            alt={feed.first_name}
          />
          <div className="feed-details">
            <img className="feed-icons" src="../images/briefcase.png" alt="" />
            {feed.job}
            <br />
            <img
              className="feed-icons"
              src="../images/mortarboard.png"
              alt=""
            />
            {feed.school}
            <br/>
            <img
              className="feed-icons"
              src="../images/music.png"
              alt=""
            />
            {feed.anthem}
            <br/>

          </div>
        </div>
      );
    });
    return (
      <div>
        <ChatNav />
        <div className="text">
          <h2 className="messages-tab">Messages</h2>
          <h2 className="feed-tab">Feed</h2>
        </div>
        <div className="text-border" />
        {myFeed}
      </div>
    );
  }
}

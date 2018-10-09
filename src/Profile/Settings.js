import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      measurement:'Mi.'
    };
  }
  componentDidMount() {
    axios.get("/api/settings").then(response => {
      this.setState({ userData: response.data });
      console.log(this.state.userData);
    });
  }

  render() {
    return (
      <div className="profile-main">
        <div className="arrow-wrapper">
          <Link to="/profile">
            <img
              className="myarrow"
              src="../images/rleftarrow.png"
              alt="back"
            />
          </Link>
          <div className="profile-header">Settings</div>
        </div>
        <div className="discover-wrapper">
          <div className="setting-group-title">Discovery Settings</div>
          <div className="profile-group">
            <div className="setting-title">Show Me</div>
            <div className="men-women">
              {this.state.userData.display_gender === "male" ? "Men" : "Women"}
            </div>
          </div>
          <div className="profile-group">
            <div className="setting-title">Maximum Distance</div>
            <div className="range-slider">
              {this.state.userData.max_distance}
            </div>
          </div>
          <div className="profile-group">
            <div className="setting-title">Age Range</div>
            <div className="age-slider">
              {this.state.userData.min_age} - {this.state.userData.max_age}
            </div>
          </div>
          <div className="setting-fineprint">
            Limber uses these preferences to suggest matches. Some match
            suggestions may not fall within your desired parameters.
          </div>
          <div className="show-me-wrapper">
            <div className="show-me">Show me on Limber</div>
            <div className="show-me-slider">
              {this.state.userData.show_me ? "True" : "False"}
            </div>
          </div>
          <div className="setting-fineprint">
            You won't show up in the card stack but can still message your
            existing matches.
          </div>
          <div className="show-me-wrapper">
            <div className="share-feed">Share My Feed</div>
          </div>
          <div className="setting-fineprint">
            Sharing your social content will greatly increase your chances of
            receiving messages.
          </div>
          <div className="profile-group web-profile">
            <div className="setting-title">Web profile</div>
            <div>Username</div>
            <div className="setting-fineprint">
              Create a username Share your username Haave people all over the
              world swipe right on Limber
            </div>
          </div>
          <div className="setting-group-title">Top Picks</div>
          <div className="profile-group">
            <div className="setting-title">Manage Top Picks</div>
            <div>Settings</div>
          </div>
          <div className="setting-group-title">App Settings</div>
          <div className="setting-group-title">Notifications</div>
          <div className="profile-group">
            <div className="notify">Email</div>   <div className="notify">Push Notifications</div>
          </div>
          <div className="profile-group distance">
            <div className="setting-title dist">Show Distances in </div> 
              <div className="distance-title">{this.state.measurement}</div>
              <div className="distance-btn">
              Kilometers
              </div>
              <div className="distance-btn">
              Miles
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;

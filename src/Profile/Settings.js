import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import funcs from "../jestutilities/function";
import punks from "../jestutilities/jest-testing";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
const wrapperStyle = { width: 300, margin: 10 };

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      min_age: 28,
      max_age: 38,
      max_distance: 29,
      measurement: "Mi.",
      user_id:''
    };
    this.handleMeasurement = this.handleMeasurement.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    axios.get("/api/settings").then(response => {
      this.setState({
        userData: response.data,
        min_age: response.data.min_age,
        max_age: response.data.max_age,
        max_distance: response.data.max_distance,
        user_id: response.data.user_id
      });
    });
  }

  updateSettings() {
    let newSettings = {
      min_age: this.state.min_age,
      max_age: this.state.max_age,
      max_distance: this.state.max_distance
    };
    axios.put("/api/settings", newSettings);
    punks.handleUpdateSettings(newSettings);
  }

  handleMeasurement(e) {
    this.setState({ measurement: e });
    if (this.state.measurement === "Ki.") {
    } else {
    }
  }

  handleDistanceChange(value) {
    this.setState({ max_distance: funcs.distanceValidation(value) });
  }

  handleAgeChange(value) {
    funcs.minAgeValidation(value);
    funcs.maxAgeValidation(value);
    this.setState({ min_age: value[0], max_age: value[1] });
  }

  handleDelete(){
    axios.delete(`/api/user/${this.state.user_id}`)
  }

  render() {
    return (
      <div className="profile-main">
        <div
          className="arrow-wrapper profile-head"
          onClick={() => this.updateSettings()}
        >
          <Link to="/profile">
            <img
              className="myarrow1"
              src="../images/rleftarrow.png"
              alt="back"
            />
          </Link>
          <div className="settings-header">Settings</div>
        </div>
        <div className="discover-wrapper">
          <div className="setting-group-title">DISCOVERY SETTINGS</div>
          <div className="profile-group">
            <div className="setting-title">Show Me</div>
            <div className="men-women">
              {this.state.userData.display_gender === "male" ? "Men" : "Women"}
            </div>
          </div>
          <div className="profile-group distance">
            <div className="setting-title">Maximum Distance</div>
            <div className="distance-title">{this.state.max_distance}</div>
            <div className="range-slider" style={wrapperStyle}>
              <Slider
                min={0}
                max={100}
                trackStyle={{ backgroundColor: "#ff0066", height: 2 }}
                handleStyle={{
                  borderColor: "#ff0066",
                  backgroundColor: "#ff0066"
                }}
                railStyle={{ backgroundColor: "lightgrey", height: 2 }}
                value={this.state.max_distance}
                onChange={value => this.handleDistanceChange(value)}
                handle={handle}
              />
            </div>
          </div>
          <div className="profile-group distance">
            <div className="setting-title">Age Range</div>
            <div className="distance-title">
              {" "}
              {this.state.min_age} - {this.state.max_age}
            </div>
            <div className="age-slider" style={wrapperStyle}>
              <Range
                min={18}
                max={70}
                trackStyle={[{ backgroundColor: "#ff0066", height: 2 }]}
                railStyle={{ backgroundColor: "lightgrey", height: 2 }}
                handleStyle={{
                  borderColor: "#ff0066",
                  backgroundColor: "#ff0066"
                }}
                value={[this.state.min_age, this.state.max_age]}
                onChange={value => this.handleAgeChange(value)}
                tipformatter={value => `${value}`}
              />
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
            <div className="notify">Email</div>
            <div className="notify">Push Notifications</div>
          </div>
          <div className="profile-group distance">
            <div className="setting-title dist">Show Distances in </div>
            <div className="distance-title">{this.state.measurement}</div>
            <div
              onClick={e => this.handleMeasurement("Ki.")}
              value="Ki."
              className={`distance-btn ${
                this.state.measurement === "Ki." ? "dist-selected" : ""
              }`}
            >
              Kilometers{" "}
            </div>
            <div
              onClick={e => this.handleMeasurement("Mi.")}
              value="Mi."
              className={`distance-btn ${
                this.state.measurement === "Mi." ? "dist-selected" : ""
              }`}
            >
              Miles
            </div>
          </div>
          <div className="setting-group-title">Contact Us</div>
          <div className="profile-group help">
            <div className="notify">Help & Support</div>
          </div>
          <div className="profile-group">
            <div className="notify">Share Limber</div>
            <div className="notify">Restore Purchase</div>
          </div>
          <div className="profile-group legal">
            <div className="setting-title">Legal</div>
            <div className="notify">Licenses</div>
            <div className="notify">Privacy Policy</div>
            <div className="notify">Terms of Service</div>
          </div>
          <div className="profile-group help">
            <Link to="/">
              <div className="notify">Logout</div>
            </Link>
          </div>
          <div className="limber-icon-wrapper">
            <img src="" alt="limber" />
          </div>
          <div className="profile-group help del-act">
          <Link to='/'>
            <div className="notify" onClick={() => this.handleDelete()}>Delete Account</div>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;

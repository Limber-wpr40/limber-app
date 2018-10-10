import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import funcs from '../jestutilities/function';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
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
const wrapperStyle = { width: 15, margin: 10 };

class Editinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      userName: "",
      jobTitle: "",
      about: "",
      company: "",
      school: "",
      gender: ""
    };
  }
  componentDidMount() {
    axios
      .get(`/api/profile/${this.props.location.state.user_id}`)
      .then(response => {
        console.log(response.data);
        console.log(this.props.location.state);
        this.setState({
          userName: this.props.location.state.user_name,
          about: response.data[0].about,
          jobTitle: response.data[0].job,
          company: response.data[0].company,
          school: response.data[0].school,
          gender: this.props.location.state.gender
        });
        console.log("the user is", this.state.userName);
      });
  }
  handleShowAge(value) {
    this.setState({ showAge: funcs.showAgeValidation(value) });
  }

  handleShowDistance(value) {
    this.setState({ showDistance: value });
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
        </div>
        <div className="edit-main" />
        <div className="edit-header">About {this.state.userName}</div>
        <div className="edit-wrapper">{this.state.about}</div>
        <div className="edit-header">Job Title</div>
        <div className="edit-wrapper">{this.state.jobTitle}</div>
        <div className="edit-header">Company</div>
        <div className="edit-wrapper">{this.state.company}</div>
        <div className="edit-header">School</div>
        <div className="edit-wrapper">{this.state.school}</div>
        <div className="edit-header">Snapchat</div>
        <div className="edit-wrapper">Connect Bitmoji</div>
        <div className="edit-header">Show my Instagram Photos</div>
        <div className="edit-wrapper">Connect Instagram</div>
        <div className="edit-header">My Anthem</div>
        <div className="edit-wrapper">
          <span>Choose an Anthem</span>
        </div>
        <div className="edit-fineprint">
          Control how you share your Spotify Anthem on Feed in Settings
        </div>
        <div className="edit-header">My Top Spotify Artists</div>
        <div className="edit-wrapper">Add Spotify to Your Profile</div>
        <div className="edit-fineprint">
          Control how you share your Spotify Artists on Feed in Settings
        </div>
        <div className="edit-header">I Am</div>
        <div className="edit-wrapper">{this.state.gender}</div>
        <div className="edit-header">Control Your Profile</div>
        <div className="edit-wrapper ">
          <div className="profile-selector control-profile">
            <div className="ps-text">Don't Show My Age</div>

            <div className="ps-slider" style={wrapperStyle}>
              <Slider
                min={0}
                max={1}
                trackStyle={{ backgroundColor: "#ff0066", height: 10 }}
                handleStyle={{
                  borderColor: "#ff0066",
                  backgroundColor: "#ff0066"
                }}
                railStyle={{ backgroundColor: "lightgrey", height: 10 }}
                value={this.state.showAge}
                onChange={value => this.handleShowAge(value)}
                handle={handle}
              />
            </div>

            <div className="ps-text">Make My Distance Invisible</div>

            <div className="ps-slider" style={wrapperStyle}>
              <Slider
                min={0}
                max={1}
                trackStyle={{ backgroundColor: "#ff0066", height: 10 }}
                handleStyle={{
                  borderColor: "#ff0066",
                  backgroundColor: "#ff0066"
                }}
                railStyle={{ backgroundColor: "lightgrey", height: 10 }}
                value={this.state.showDistance}
                onChange={value => this.handleShowDistance(value)}
                handle={handle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editinfo;

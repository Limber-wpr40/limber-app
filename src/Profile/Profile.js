import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    };
  }
  componentDidMount() {
    axios.get("/api/settings").then(response => {
      this.setState({ userData: response.data });
    });
  }

  render() {
    return (
      <div className='profile-main'>
                <div className="arrow-wrapper">
          <Link to="/landing">
            <img
              className="myarrow"
              src="../images/rleftarrow.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="user-info-wrapper">
          <div className="my-info">
            <img
              src={`./images/${this.state.userData.user_image}`}
              alt="brian"
              className="profile-pic"
            />
            <div className="nameage">{`${this.state.userData.first_name}, ${
              this.state.userData.current_age
            }`}</div>
          </div>
          <div className="settings-profile">
            <Link to="./settings">
              <div className="group-holder">
                <div className="profile-image-wrapper">
                  <img
                    className="profile-image"
                    src="../images/settings.png"
                    alt="settings"
                  />
                </div>
                <div className="group-title">SETTINGS</div>
              </div>
            </Link>
            <Link to={{pathname: "./editinfo", state:{user_id: this.state.userData.user_id,user_name:this.state.userData.first_name, gender:this.state.userData.gender} }}>
              <div className="group-holder">
                <div className="profile-image-wrapper">
                  <img
                    className="profile-image"
                    src="../images/edit.png"
                    alt="Edit Info"
                  />
                </div>
                <div className="group-title">EDIT INFO</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";

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
      console.log(this.state.userData);
    });
  }

  render() {
    return (
      <div>
        <div className='user-info-wrapper'>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

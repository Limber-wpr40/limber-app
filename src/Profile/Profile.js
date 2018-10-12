import React, { Component } from "react";
import Slider from "react-slick";
import "./Profile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

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
      console.log("this is the data", this.state.userData);
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500
    };

    return (
      <div>
        <Nav />
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
            <Link
              to={{
                pathname: "./editinfo",
                state: {
                  user_id: this.state.userData.user_id,
                  user_name: this.state.userData.first_name,
                  gender: this.state.userData.gender
                }
              }}
            >
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
          <div className="profile-advert">
            <Slider {...settings}>
              <div className="advert1">
                <img
                  className="profile-logo-icon"
                  src="../images/diamond.png"
                  alt="daily"
                />
                <h5>Get Daily Top Picks</h5>
                <p>Featured Profiles of the Day, just for you!</p>
              </div>
              <div className="advert1">
                <img
                  className="profile-logo-icon"
                  src="../images/tinder.png"
                  alt="gold"
                />
                <h5>Get Limber Gold</h5>
                <p>See Who Likes You & More!</p>
              </div>
              <div className="advert1">
                <img
                  className="profile-logo-icon"
                  src="../images/tinder.png"
                  alt="gold"
                />
                <h5>Get More Matches Faster</h5>
                <p>Boost your Profile once a Month!</p>
              </div>
              <div className="advert1">
                <img
                  className="profile-logo-icon"
                  src="../images/thunder.png"
                  alt="boost"
                />
                <h5>Standout With Super Likes</h5>
                <p>You're 3x more likely to get a match!</p>
              </div>
              <div className="advert1">
                <img
                  className="profile-logo-icon"
                  src="../images/star.png"
                  alt="super like"
                />
                <h5>Swipe Around the World</h5>
                <p>Passport to anywhere with Limber Plus</p>
              </div>
              <div className="advert1">
                <img
                  className="profile-logo-icon"
                  src="../images/location.png"
                  alt="location pin"
                />
                <h5>Control Your Profile</h5>
                <p>Limit What Others see with Limber Plus</p>
              </div>
              <div className="advert1">
                <image
                  className="profile-logo-icon"
                  src="../images/wrench.png"
                  alt="wrench"
                />
                <h5>I Meant to Swipe Right</h5>

                <p>Get Unlimited Rewinds with Limber Plus</p>
              </div>
              <div className="advert1">
                <img
                  className="profile-logo-icon"
                  src="../images/refresh.png"
                  alt="rewind"
                />
                <h5>Increase Your Chances</h5>
                <p>Get Unlimited Likes with Limber Plus</p>
              </div>
            </Slider>
          </div>
          <div className="my-limber-plus">
            <button className="limber-plus-btn">MY LIMBER PLUS</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

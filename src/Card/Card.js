import React, { Component } from "react";
import axios from "axios";
import profileIcon from "../logos/user.png";
import bubble from "../logos/speech-bubbles.png";
import tinderLogo from "../logos/tinder-logo.png";
import { Link } from "react-router-dom";
import MotionStack from "react-motion-stack";
import "react-motion-stack/build/motion-stack.css";
import "./Card.css";
import pmtest from "../jestutilities/pmtest";
import punks from "../jestutilities/jest-testing";
import briefcase from "../logos/briefcase.png";
import gpslogo from "../logos/placeholder.png";
import gradcap from "../logos/mortarboard.png";
import refresh from "../logos/refresh.png";
import nope from "../logos/nope.png";
import star from "../logos/star.png";
import like from "../logos/like.png";
import thunder from "../logos/thunder.png";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      potMatches: [],
      super_like: false,
      match_id: 0,
      hide: true,
      direction: ""
    };
    this.handleInfoDropDown = this.handleInfoDropDown.bind(this);
  }

  onBeforeSwipe = (swipe, direction, state) => {
    pmtest.handleStateChange(state);
    pmtest.handleDirectionChange(direction);
    punks.handleDirectionChange(direction);
    punks.handleState(state);
    this.setState({
      direction
    });

    swipe();
    if (direction === "right") {
      this.setState({ super_like: true, match_id: state.pressedId });
      let myLike = {
        match_id: this.state.match_id,
        super_like: this.state.super_like
      };
      axios.post("/api/likes", myLike);
    } else {
    }
  };

  onSwipeEnd = ({ data }) => {
    punks.handleOnSwipeEnd(data);
  };

  handleStartSwipe = () => {
    this.setState({
      hasSwiped: true
    });
  };

  handleInfoDropDown() {
    let hideDetails = document.querySelector(".profile-details");
    let hideOverlay = document.querySelector(".details-overlay");
    let alterUserCardImg = document.querySelector(".user-card-image");
    let alterUserCard = document.querySelector(".user-card");
    let hideHeader = document.querySelector(".header");
    if (this.state.hide === true) {
      hideDetails.classList.remove("hide");
      hideOverlay.classList.add("hide");
      hideHeader.classList.add("hide");
      alterUserCardImg.classList.add("alterImg");
      alterUserCard.classList.add("alterCard");
      this.setState({ hide: false });
    } else {
      hideDetails.classList.add("hide");
      hideOverlay.classList.remove("hide");
      hideHeader.classList.remove("hide");
      alterUserCardImg.classList.remove("alterImg");
      alterUserCard.classList.remove("alterCard");
      this.setState({ hide: true });
    }
  }

  renderButtons(props) {
    return (
      <div className="btn-group">
        <button className="dot">
          <img
            className="footer-icons"
            src={refresh}
            alt=""
            onClick={props.reject}
          />
        </button>
        <button className="dot">
          <img
            className="footer-icons"
            src={nope}
            alt=""
            onClick={props.reject}
          />
        </button>
        <button className="dot">
          <img
            className="footer-icons"
            src={star}
            alt=""
            onClick={props.accept}
          />
        </button>
        <button className="dot">
          <img
            className="footer-icons"
            src={like}
            alt=""
            onClick={props.accept}
          />
        </button>
        <button className="dot">
          <img
            className="footer-icons"
            src={thunder}
            alt=""
            onClick={props.accept}
          />
        </button>
      </div>
    );
  }

  componentDidMount() {
    axios.get("/api/possiblematches").then(res => {
      res.data.forEach(potMatch => {
        let {
          user_id,
          user_image,
          first_name,
          current_age,
          job,
          school,
          dist,
          about
        } = potMatch;
        potMatch.id = user_id;
        potMatch.element = (
          <div className="user-card" onClick={this.handleStartSwipe}>
            <div className="user-card-image">
              <img src={`../images/${user_image}`} alt="" />

              <div className="overlay">
                <div className="like-nope">
                  {this.state.hasSwiped ? (
                    <div>
                      <div
                        className={`like ${
                          this.state.super_like ? "" : "hide"
                        }`}
                      >
                        LIKE
                      </div>
                      <div
                        className={`nope ${
                          this.state.super_like ? "hide" : ""
                        }`}
                      >
                        NOPE
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="details-overlay">
                  <div className="info-group">
                    <div className="name-detail">
                      <span>{first_name}</span>
                      <span>{current_age}</span>
                    </div>

                    <div className="match-info">
                      <div>
                        <img className="card-icon" src={briefcase} alt="job" />
                        {job}
                      </div>
                      <div>
                        <img className="card-icon" src={gradcap} alt="school" />
                        {school}
                      </div>
                      <div>
                        <img
                          className="card-icon"
                          src={gpslogo}
                          alt="location"
                        />
                        {dist} miles away
                      </div>
                    </div>
                  </div>
                  <div
                    className="info-group"
                    onClick={() => this.handleInfoDropDown()}
                  >
                    <div className="show-profile-button">
                      <img src="../images/info.png" alt="info" width="30px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-details hide">
              <div className="hide-profile-button">
                <img
                  src="../images/downarrow.png"
                  alt="arrow"
                  width="50px"
                  onClick={() => this.handleInfoDropDown()}
                />
              </div>
              <div className="detail-name">
                <span>{first_name}</span>
                <span>{current_age}</span>
              </div>
              <div>
                <img
                  className="details-icon"
                  src="../images/placeholder.png"
                  alt="location"
                />
                {dist} miles away
              </div>
              <div className='about-details'>{about}</div>
            </div>
          </div>
        );
      });

      this.setState({
        potMatches: res.data
      });
    });
  }

  render() {
    console.log("state of hide at render", this.state.hide);
    return (
      <div>
        <div className="nav-conatiner">
          <header className="header">
            <Link to="/profile">
              <img className="header-icons" src={profileIcon} alt="" />
            </Link>
            <Link to="/landing">
              <img className="header-logo" src={tinderLogo} alt="" />
            </Link>
            <Link to="/messages">
              <img className="header-icons" src={bubble} alt="" />
            </Link>
          </header>
        </div>
        <MotionStack
          data={this.state.potMatches}
          onSwipeEnd={this.onSwipeEnd}
          onBeforeSwipe={this.onBeforeSwipe}
          render={props => props.element}
          infinite={false}
          renderButtons={this.renderButtons}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
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
      showDownArrow: false,
      infoShow: false
    };

    this.handleInfoClick - this.handleInfoClick.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  showInfo() {
    let infoBtn = document.querySelector(".info-icon-btn");
    let dropDownEl = document.querySelector(".dropdown");
    let cardPicEl = document.querySelector(".user-card-pic");
    this.setState({
      infoShow: !this.state.infoShow
    });
    if (!this.state.infoShow) {
      infoBtn.classList.add("close");
      infoBtn.src = "../images/downarrow.png";
      dropDownEl.classList.add("dropDownShow");
      dropDownEl.classList.remove("dropDownNoShow");
      cardPicEl.classList.add("user-card-pic-info");
      cardPicEl.classList.remove("user-card-pic-noinfo");
    } else {
      infoBtn.classList.remove("close");
      infoBtn.src = "../images/info.png";
      dropDownEl.classList.remove("dropDownShow");
      dropDownEl.classList.add("dropDownNoShow");
      cardPicEl.classList.remove("user-card-pic-info");
      cardPicEl.classList.add("user-card-pic-noinfo");
    }
  }

  handleInfoClick() {
    if (this.state.showDownArrow) {
    }
  }

  onBeforeSwipe = (swipe, direction, state) => {
    pmtest.handleStateChange(state);
    pmtest.handleDirectionChange(direction);
    punks.handleDirectionChange(direction);
    punks.handleState(state);

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
      res.data.map(potMatch => {
        let {
          user_id,
          user_image,
          first_name,
          current_age,
          job,
          school,
          dist
        } = potMatch;
        potMatch.id = user_id;
        potMatch.element = (
          <div className="user-card">
            <img
              className="user-card-pic user-card-pic-noinfo"
              src={`../images/${user_image}`}
              alt=""
            />
            <div className="section-match-details">
              <div className="match-visible-wrapper">
                <div className="match-details-wrapper">
                  <h1 className="name-detail">
                    {first_name}
                    <span className="age-detail"> {current_age}</span>
                  </h1>
                  <p className="job-detail">
                    <img className="briefcase" src={briefcase} alt="" />
                    {job}
                  </p>
                  <p className="school-detail">
                    <img src={gradcap} alt="" />
                    {school}
                  </p>
                  <p className="dist-detail">
                    <img src={gpslogo} alt="" />
                    {dist} miles away
                  </p>
                </div>
                <div className="info-icon-wrapper">
                  <img
                    className="info-icon-btn"
                    onClick={() => this.showInfo()}
                    src={
                      this.state.infoShow
                        ? "../images/downarrow.png"
                        : "../images/info.png"
                    }
                    alt="icon"
                  />
                </div>
              </div>
              <div className="dropdown dropDownNoShow">
                Can you see this? I want to see even more
              </div>
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

    return (
      <div className="demo-wrapper">
        <MotionStack
          data={this.state.potMatches}
          onSwipeEnd={this.onSwipeEnd}
          onBeforeSwipe={this.onBeforeSwipe}
          render={props => props.element}
          infinite={false}
          renderButtons={this.renderButtons}
        />
        {/* {displayDetails} */}
      </div>
    );
  }
}

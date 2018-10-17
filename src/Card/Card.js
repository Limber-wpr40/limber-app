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
import info from "../logos/info.png";
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
      hasSwiped: false,
      direction: ""
    };
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
      console.log("LIKE!");
    } else {
      console.log("NOPE!");
    }
  };

  onSwipeEnd = ({ data }) => {
    punks.handleOnSwipeEnd(data);
    this.setState({ hasSwiped: false });
  };

  handleStartSwipe = () => {
    this.setState({
      hasSwiped: true
    });
  };

  handleInfoDropDown(){

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
          dist
        } = potMatch;
        potMatch.id = user_id;
        potMatch.element = (
          <div className="user-card" onClick={this.handleStartSwipe}>
            <img src={`../images/${user_image}`} alt="" />

            <div className="overlay">
              <div className="like-nope">
                {this.state.hasSwiped ? (
                  <div>
                    <div
                      className={`like ${this.state.super_like ? "" : "hide"}`}
                    >
                      LIKE
                    </div>
                    <div
                      className={`nope ${this.state.super_like ? "hide" : ""}`}
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
                      <img className="card-icon" src={gpslogo} alt="location" />
                      {dist} miles away
                    </div>
                  </div>
                </div>
                <div className="info-group">
                  <div className="show-profile-button">
                    <img src="../images/info.png" width="30px" onClick={()=> this.handleInfoDropDown()} />
                  </div>
                </div>
              </div>
            </div>

            <div className={`profile-details${this.state.hide ? " hide" : ""}`}>
              <h1>salkdsfjldfdsfljfsdjl</h1>
              <h1>salkdsfjldfdsfljfsdjl</h1>
              <h1>salkdsfjldfdsfljfsdjl</h1>
              <h1>salkdsfjldfdsfljfsdjl</h1>
              <h1>salkdsfjldfdsfljfsdjl</h1>
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
    console.log("to hide or not", this.state.hide);
    return (
      // <div className="demo-wrapper">
      <MotionStack
        data={this.state.potMatches}
        onSwipeEnd={this.onSwipeEnd}
        onBeforeSwipe={this.onBeforeSwipe}
        render={props => props.element}
        infinite={false}
        renderButtons={this.renderButtons}
      />
      // </div>
    );
  }
}

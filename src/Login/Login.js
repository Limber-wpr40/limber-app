import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <section className="sec1">
          <Slider {...settings}>
            <div className="view1">
              <h2>Discover new and interesting people nearby</h2>
              <img
                className="login-img"
                src="../images/login.jpeg"
                alt="people"
              />
            </div>
            <div className="view1">
              <h2>Swipe Right to like someone or Swipe Left to pass</h2>
              <img
                className="login-img"
                src="../images/limberlike.png"
                alt="like"
              />
            </div>
            <div className="view1">
              <h2>If they also Swipe Right, it's a Match!</h2>
              <img
                className="login-img"
                src="../images/limbermatch.png"
                alt="people"
              />
            </div>
            <div className="view1">
              <h2>Only people you've matched with can message you</h2>
              <img
                className="login-img"
                src="../images/messaging.png"
                alt="people"
              />
            </div>
          </Slider>
        </section>
        <h3>
          By tapping Log in, you are agreeing to our Terms of Service and
          Privacy Policy
        </h3>

        <button className="fblogin btn" onClick={() => this.handleClick()}>
          LOG IN WITH FACEBOOK
        </button>
        <Link to='/phone'>
        <button className="pnumber btn">
          LOG IN WITH PHONE NUMBER
        </button>
        </Link>
      </div>
    );
  }
}

export default Login;

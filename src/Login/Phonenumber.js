import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Phonenumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prelim: "",
      phone:"",
      keypadShow: false,
      user: {}
    };
    this.handleInput = this.handleInput.bind(this);
  }

  showKeyPad() {
    this.setState({
      keypadShow: !this.state.keypadShow
    });
  }

  handleInput(e) {
    this.setState({
      phone: e.target.value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
    });
  }

  handleGetSession(){
     axios.get(`/api/user/${this.state.phone}`)
     .then(response => {this.setState({user:response.data})
    });

  }

  render() {
    let isActive = this.state.phone.length === 12 ? true : false;

    return (
      <div>
        <div className="arrow-wrapper">
          <Link to="/">
            <img
              className="myarrow"
              src="../images/rleftarrow.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="login-main-body">
          <div className="main-title">My phone number is</div>
          <div className="phone-id">
            <input className="country-code" placeholder="US +1" />
            <input
              className="phone-holder"
              onClick={() => this.showKeyPad()}
              placeholder="Phone Number"
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div className="fineprint">
            <div className="change-phone">
              <div className="phone-question">Changed your phone number?</div>
              <Link to="/email" className="email-link">
                <div>LOGIN BY EMAIL</div>
              </Link>
            </div>
            <p>
              When you tap continue, limber will send a text with verification
              code. Message and Data rates may apply. The verified phone number
              can be used to login.
              <br />
              <a
                className="phone-help"
                href="www.help.tinder.com/hc/en-us/articles/360005147211"
              >
                Learn what happens when you number changes.
              </a>
            </p>
          </div>
          <Link
            to={{
              pathname: "/verify",
              state: { phone: this.state.phone }
            }}
          >
            <button
              className={(isActive ? "continue-active" : "continue") + " btn"} onClick={()=> this.handleGetSession()} 
            >
              CONTINUE
            </button>
          </Link>
        </div>
        <div
          className={
            (this.state.keypadShow ? "popUpShow" : "popUpNoShow") + " popUp"
          }
        >
          <div className="key-pad">
            <div
              className="key num-key" 
            >
              1
            </div>
            <div className="key num-key" onClick={(e) => this.handleInput(e.target.value)}value='2'>
              2
            </div>
            <div className="key num-key" onClick={(e) => this.handleInput(3)}>
              3
            </div>
            <div className="key action-key">Back</div>
            <div className="key num-key" onClick={(e) => this.handleInput(4)}>
              4
            </div>
            <div className="key num-key" onClick={(e) => this.handleInput(5)}>
              5
            </div>
            <div className="key num-key" onClick={(e) => this.handleInput(6)}>
              6
            </div>
            <div className="key action-key">Done</div>
            <div className="key num-key" onClick={(e) => this.handleInput(7)}>
              7
            </div>
            <div className="key num-key" onClick={(e) => this.handleInput(8)}>
              8
            </div>
            <div className="key num-key" onClick={(e) => this.handleInput(9)}>
              9
            </div>
            <div className="key action-key">back</div>
            <div className="key action-key" />
            <div className="key num-key" onClick={(e) => this.handleInput(0)}>
              0
            </div>
            <div className="key action-key" />
            <div className="key action-key">back</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Phonenumber;

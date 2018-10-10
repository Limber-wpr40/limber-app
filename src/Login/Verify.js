import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import funcs from '../jestutilities/function';

class Verify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vcode: "",
      phone: "",
      keypadShow: false
    };
    this.handleInput = this.handleInput.bind(this);
  }
  showKeyPad() {
    this.setState({
      keypadShow: !this.state.keypadShow
    });
  }

  handleInput(val) {
    this.setState({ vcode: funcs.codeValidation(val) });
  }
  render() {
    console.log(this.state.keypadShow);
    let isActive = this.state.vcode.length === 6 ? true : false;
    return (
      <div>
        <div className="arrow-wrapper">
          <Link
            to={{
              pathname: "/phone"
              // state:{phone: this.session.user.phone}
            }}
          >
            <img
              className="myarrow"
              src="../images/rleftarrow.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="login-main-body">
          <div className="main-title">My code is</div>
          <div className="change-phone">
            <div className="phone-question">+1 989-108-8833</div>
            <div className="resend-link">RESEND</div>
          </div>
          <div className="vcode-id" onClick={() => this.showKeyPad()}>
            <input
              type="number"
              className="v-code"
              onChange={e => this.handleInput(e)}
            />
          </div>
          <Link to="./landing">
            <button
              className={(isActive ? "continue-active" : "continue") + " btn"}
            >
              CONTINUE
            </button>
          </Link>
        </div>
        <div
          className={(this.state.keypadShow ? "popUpShow" : "popUpNoShow") + " popUp" }
        >
          <div className="key-pad">
            <div className="key num-key">1</div>
            <div className="key num-key">2</div>
            <div className="key num-key">3</div>
            <div className="key action-key">Back</div>
            <div className="key num-key">4</div>
            <div className="key num-key">5</div>
            <div className="key num-key">6</div>
            <div className="key action-key">Done</div>
            <div className="key num-key">7</div>
            <div className="key num-key">8</div>
            <div className="key num-key">9</div>
            <div className="key action-key">back</div>
            <div className="key action-key" />
            <div className="key num-key">0</div>
            <div className="key action-key" />
            <div className="key action-key">back</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Verify;

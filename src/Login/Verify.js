import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios';

class Verify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vcode: "",
      phone: "",
      keypadShow: false,
      user:{}
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidUpdate(){
   
}

showKeyPad() {
  this.setState({
    keypadShow: !this.state.keypadShow
  });
}

handleInput(e) {
  this.setState({ vcode: e.target.value });
  axios.get(`/api/user/${this.props.location.state.phone}`)
  .then(response => {this.setState({user:response.data})
});
}
render() {
  console.log(this.props)
    let isActive = this.state.vcode.length === 6 ? true : false;
    return (
      <div>
        <div className="arrow-wrapper">
          <Link
            to={{
              pathname: "/phone",
              state:{phone: this.props.location.state.phone}
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
            <div className="phone-question">{this.props.location.state.phone}</div>
            <div className="resend-link">RESEND</div>
          </div>
          <div className="vcode-id" onClick={() => this.showKeyPad()}>
            <input ref={input => input && input.focus()} type='number'
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

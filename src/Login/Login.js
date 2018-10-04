import React, { Component } from "react";
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props)

       this.handleClick = this.handleClick.bind(this)
    }

handleClick(){
return "hahaha"
}
  render() {
    return (
      <div>
        <section className="sec1">
          <div className="view1">
            <h2>Discover new and interesting people nearby</h2>
            <img className="login-img" src="../images/woman105.jpeg" alt="people" />
          </div>
          {/* <div className="view1">
            <h2>Swipe Right to like someone or Swipe Left to pass</h2>
            <img className="login-img" src="../images/woman105.jpeg" alt="like" />
          </div>
          <div className="view1">
            <h2>If they also Swipe Right, it's a Match!</h2>
            <img className="login-img" src="../images/match.jpg" alt="people" />
          </div>
          <div className="view1">
            <h2>Only people you've matched with can message you</h2>
            <img className="login-img" src="../images/chat.jpg" alt="people" />
          </div> */}
        </section>
        <h3>
          By tapping Log in, you are agreeing to our Terms of Service and
          Privacy Policy
        </h3>
       
        <button className='fblogin btn' onClick={() => this.handleClick()}>LOG IN WITH FACEBOOK</button>
        <button className='Pnumber btn' onClick={() => this.handleClick()}>LOG IN WITH PHONE NUMBER</button>
      </div>
    );
  }
}

export default Login
import React, { Component } from "react";

class Verify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vcode: ""
    };


  }

  handleInput(e){ 
    this.setState({vcode:e.target.value})
  }
  render() {
    return (
      <div>
        <img className="myarrow" src="" alt="back" />
        <h1>My code is</h1>
        <div className="phone-id">

          <input
            className="v-code"
            onChange={e => this.handleInput(e)}
          />
        </div>
      </div>
    );
  }
}

export default Verify

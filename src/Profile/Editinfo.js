import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Editinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null
    };
  }
  componentDidMount() {
    axios
      .get(`/api/profile/${this.props.location.state.user_id}`)
      .then(response => {
        this.setState({ userData: response.data });
      });
  }

  render() {
   
    return (
      <div className='profile-main'>
        {!this.state.userData ? (
          <div>Loading....</div>
          ) : (
            <div>{this.state.userData[0].about}</div>
        )}
        <div className="arrow-wrapper">
          <Link to="/profile">
            <img
              className="myarrow"
              src="../images/rleftarrow.png"
              alt="back"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Editinfo;

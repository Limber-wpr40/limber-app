import React, { Component } from 'react';
import pic from './'

export default class Match extends Component {
  render() {
    return (
      <div>
        <h1>Its a match</h1>
            <div className="images">
                <img src="" alt="boy"/>
                <img src="" alt="girl"/>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Say Hello</button>
      </div>
    )
  }
}

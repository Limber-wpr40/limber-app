import React, { Component } from 'react';
import tinder from '../Messages/tinder.png';
import chat from '../Messages/chat.png';
import pic1 from '../Messages/pic2.jpg';
import axios from 'axios';



import './Messages.css'


export default class Messages extends Component {
    constructor() {
        super();

        this.state = {
            matches: []
        };
    }

    componentDidMount() {
        axios.get("/api/matches/:id").then(response => {
            console.log(response);
            this.setState({
                matches: response.data
            });
        });
    }
    

  render() {
      let displayMatches = this.state.matches.map((match, i) => {
          <div key={i}>
            <div>{match.user_image}</div>
          </div>
      })
    return (
      <div>
        <div className="navbar">
             <img className="tinder-icon" src={tinder} style={{width:'40px', height:'40px'}}/>
             <img className="chat-icon" src={chat} style={{width:'50px', height:'50px'}} />

             
        </div>
        <div className="text">
            <h2 className='messages-tab'>Messages</h2>
            <h2 className='feed-tab'>Feed</h2>
        </div>

        <div className="text-border"></div>

        <div className="input">
            <input type="text" placeholder='Search Matches'/>
        </div>

        <div className="matches">
            <h4>New matches</h4>
            <img className="pic" src={pic1} style={{width:'70px', height:'70px'}} />
            {/* <img className="pic" src={pic1} style={{width:'70px', height:'70px'}} /> */}

                     {displayMatches}
            </div>

            <div className="messages">
                <h4>Messages</h4>
                <img src={tinder} style={{width:'70px', height:'70px'}} />
                


            </div>

      </div>
    )
  }
}

import React, { Component } from 'react'
import tinder from '../Messages/tinder.png';
import chat from '../Messages/chat.png';
import './Feed.css';
import axios from 'axios';


export default class Feed extends Component {
  constructor(props){
    super(props);

    this.state = {
      matchFeed:[]
    }
  }

  componentDidMount(){
    axios.get(`api/feed?user_id=${user_id}`)
    .then(response => {
      this.setState({matchFeed:response.data})
    })

  }
    
  render() {

    return (
      <div>
        <div className="navbar">
             <img className="tinder-icon" src={tinder} style={{width:'40px', height:'40px'}} alt='logo'/>
             <img className="chat-icon" src={chat} style={{width:'50px', height:'50px'}} alt='chat'/>

             
        </div>
        <div className="text">
            <h2 className='messages-tab'>Messages</h2>
            <h2 className='feed-tab'>Feed</h2>
        </div>
        <div className="text-border"></div>
        {/* ///chat box start here */}
       
     
        
      </div>
    );
  }
}

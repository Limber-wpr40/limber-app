import React, { Component } from 'react'
import './Feed.css';
import axios from 'axios';
import ChatNav from '../Chat/ChatNav'


export default class Feed extends Component {
  constructor(props){
    super(props);

    this.state = {
      matchFeed:[],
      user_id:176
    }
  }

  componentDidMount(){
    axios.get(`api/feed?user_id=${this.state.user_id}`)
    .then(response => {
      this.setState({matchFeed:response.data})
    })

  }
    
  render() {
    let myFeed = this.state.matchFeed.map(feed => {
      
      return(
        <div key={feed.match_id}>
        <div className='feed-name'>{feed.first_name}</div>
        <img className='feed-img' src={`../images/${feed.user_image}`} alt={feed.first_name}/>
        </div>
      )
    })
    return (
      <div>
         <ChatNav />
        <div className="text">
            <h2 className='messages-tab'>Messages</h2>
            <h2 className='feed-tab'>Feed</h2>
        </div>
        <div className="text-border"></div>
        {myFeed}   
      </div>
    );
  }
}

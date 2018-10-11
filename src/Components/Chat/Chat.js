import React, { Component } from "react";
import io from "socket.io-client";
import "./Chat.css";
import ChatNav from "./ChatNav";
import axios from 'axios';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: [],
      user_id: '',
      match_id: '',
      messagethread: [],
      chats: []
    };

    this.socket = io("localhost:4000");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      // pmtest.addMessage(data)
      this.setState({ messages: [...this.state.messages, data ] });
      console.log(this.state.messages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      // pmtest.sendMessage(data);
      this.socket.emit("SEND_MESSAGE", {
        author: this.state.username,
        message: this.state.message
        // user_id: this.props.matchIds.user_id
      });
      console.log(this.props.user_id);
      this.setState({ message: "" });
    };
  }
  createNewMessage() {
    
  }
  componentDidMount() {
    console.log(this.props.location.state)
    const {user_id, match_id, user_image} = this.props.location.state;
    this.setState({
      user_id: this.props.location.state.user_id,
      match_id: this.props.location.state.match_id
    })
    let mesdata = {recv_id:this.props.location.state.match_id}
    // console.log(this.props.match.params.match_id)
    axios.get(`/api/messages?sender_id=${user_id}&recv_id=${match_id}`).then(res => {
      this.setState({
        messagethread: res.data
      })
     
      console.log(res)
    })
}


  render() {
    let oldMessageThread = this.state.messagethread.map(thread => {
      console.log(this.state.recv_id, this.state.sender_id)
      return (
        <div key={thread.message_id}>
        <div className={ this.state.user_id === thread.sender_id ? 'userClass' : 'matchClass' }>
            
            {thread.sender_id}:{thread.msg_body}
        </div>
    </div>
        )
      })
          
        
     
       
    // console.log(this.props.location);
    return (
      <div className="container">
        <ChatNav />
        <div className="row">
          <div className="card">
            <div className="card-body">
              <hr />
              <div>{oldMessageThread}</div>
              <div>
                {this.state.messages.map(message => {
                  return (
                    <div className="userClass">
                        
                      {message.author}:{message.message}
                    </div>
                  );
                  // }).filter(message => {
                  //   // console.log(message)
                  //   return message.user_id === this.props.matchIds.user_id || message.user_id === this.props.matchIds.match_id
                })}
              </div>
            </div>
            <div className="card-footer">
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={ev => this.setState({ username: ev.target.value })}
                className="form-control"
              />
              <br />
              <input
                type="text"
                placeholder="Message"
                className="form-control"
                value={this.state.message}
                onChange={ev => this.setState({ message: ev.target.value })}
              />
              <br />
              <button onClick={this.sendMessage} className="send-btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
////////////////////

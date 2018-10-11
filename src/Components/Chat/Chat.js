import React, { Component } from "react";
import io from "socket.io-client";
import "./Chat.css";
import ChatNav from "./ChatNav";


export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: []
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
  
  // componentDidMount() {
  //   axios.get(`/api/messages?recv_id=${this.props.match.params.match_id}`).then(res => {
  //     console.log(res)
  //   })
    
  // }

  render() {
    // console.log(this.props.location);
    return (
      <div className="container">
        <ChatNav />
        <div className="row">
          <div className="card">
            <div className="card-body">
              <hr />
              <div>
                {this.state.messages.map(message => {
                  return (
                    <div className="messages">
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

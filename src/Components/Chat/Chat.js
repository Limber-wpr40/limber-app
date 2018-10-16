import React, { Component } from "react";
import io from "socket.io-client";
import "./Chat.css";
import ChatNav from "./ChatNav";
import axios from "axios";

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: [],
      user_id: "",
      match_id: "",
      match_image: "",
      messagethread: [],
      chats: [],
      roomName: ""
    };

    this.socket = io("localhost:4000");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      this.setState({ messages: [...this.state.messages, data] });
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({ message: "" });
      let newMessage = {
        sender_id: this.state.user_id,
        recv_id: this.state.match_id,
        msg_body: this.state.message
      };
      axios.post(`/api/message`, newMessage).then(res => {
        this.setState({
          message: res.data
        });
      });
    };
  }

  //changesmade
  handleEnter = e => {
    if (e.key !== "Enter") return;
    this.sendMessage();
  };

  componentDidMount() {
    const { user_id, match_id } = this.props.location.state;
    this.setState({
      user_id: this.props.location.state.user_id,
      match_id: this.props.location.state.match_id,
      match_image: this.props.location.state.match_image
    });

    axios
      .get(`/api/messages?sender_id=${user_id}&recv_id=${match_id}`)
      .then(res => {
        this.setState({
          messagethread: res.data
        });
      });

    if (
      this.props.location.state.user_id > this.props.location.state.match_id
    ) {
      this.setState({
        roomName:
          this.props.location.state.match_id +
          "_" +
          this.props.location.state.user_id
      });
    } else {
      this.setState({
        roomName:
          this.props.location.state.user_id +
          "_" +
          this.props.location.state.match_id
      });
    }
  }

  render() {
    console.log(this.state.roomName);
    let oldMessageThread = this.state.messagethread.map(thread => {
      return (
        <div key={thread.message_id}>
          <div
            className={
              this.state.user_id === thread.sender_id
                ? "userClass"
                : "matchClass"
            }
          >
            <img
              src={
                this.state.user_id === thread.sender_id
                  ? ""
                  : `../images/${thread.user_image}`
              }
              className="chat-pic"
              alt={thread.first_name}
            />
            <p>{thread.msg_body}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <ChatNav match_image={this.state.match_image} />
        <div className="row">
          <div className="card">
            <div className="card-body">
              <hr />
              <div>{oldMessageThread}</div>
              <div>
                {this.state.messages.map(message => {
                  return <div className="userClass">{message.message}</div>;
                })}
              </div>
            </div>
            <div className="card-footer">
              {/* <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={ev => this.setState({ username: ev.target.value })}
                className="form-control"
              /> */}
              <br />
              <input
                type="text"
                placeholder="Message"
                className="form-control"
                value={this.state.message}
                onChange={ev => this.setState({ message: ev.target.value })}
                onKeyPress={this.handleEnter}
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

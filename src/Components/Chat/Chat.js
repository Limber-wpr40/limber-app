import React, { Component } from "react";
import io from "socket.io-client";
import "./Chat.css";
import ChatNav from "./ChatNav";
import axios from "axios";


 class Chat extends Component {
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
    this.socket = io();

    this.addMessage = data => {
      var add = {
        sender_id: data.sender_id,
        recv_id: data.recv_id,
        msg_body: data.message,
        user_image: this.props.location.state.match_image
      };

      this.setState({ messagethread: [...this.state.messagethread, add] });
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        // author: this.state.username,
        sender_id: this.props.location.state.user_id,
        recv_id: this.props.location.state.match_id,
        message: this.state.message,
        roomName: this.state.roomName
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
var roomName = ''
    if (
      this.props.location.state.user_id > this.props.location.state.match_id
    ) {
       roomName =
        this.props.location.state.match_id +
        "_" +
        this.props.location.state.user_id;
    } else {
       roomName =
        this.props.location.state.user_id +
        "_" +
        this.props.location.state.match_id;
    }
    this.setState({
      roomName: roomName
    });

    this.socket.emit("JOINROOM", roomName);

    this.socket.on("ROOM_MESSAGE", data => {
      this.addMessage(data);
    });
  }



  render() {

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
        <div className="chatroom-header">
          <ChatNav match_image={this.state.match_image} />
        </div>
        <div className="row">
          <div className="card">
            <div className="card-body" id='card-chat'>
              <div>{oldMessageThread}</div>
              <div>
                {this.state.messages.map(message => {
                  return <div className="userClass">{message.message}</div>;
                })}
              </div>
            </div>
            <footer className="chatroom-footer">
              <div className="card-footer">
                <input
                  id="chat-input"
                  type="text"
                  placeholder="Message"
                  className="form-control"
                  value={this.state.message}
                  onChange={ev => this.setState({ message: ev.target.value })}
                  onKeyPress={this.handleEnter}
                />
                <h4 onClick={this.sendMessage} className="send-btn">
                  Send
                </h4>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}


export default Chat

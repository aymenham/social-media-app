import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons'
export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://www.pngkit.com/png/detail/372-3729814_profile-icon-my-profile-icon-png.png",
      type: "",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna a imperdiet egestas. Donec in magna quis ligula",
    },
    {
      key: 2,
      image:
        "https://www.pngkit.com/png/detail/372-3729814_profile-icon-my-profile-icon-png.png",
      type: "other",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna a imperdiet egestas. Donec in magna quis ligula",
    },
    {
      key: 3,
      image:
        "https://www.pngkit.com/png/detail/372-3729814_profile-icon-my-profile-icon-png.png",
      type: "other",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna a imperdiet egestas. Donec in magna quis ligula",
    },
    {
      key: 4,
      image:
        "https://www.pngkit.com/png/detail/372-3729814_profile-icon-my-profile-icon-png.png",
      type: "",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna a imperdiet egestas. Donec in magna quis ligula",
    },
    {
      key: 5,
      image:
        "https://www.pngkit.com/png/detail/372-3729814_profile-icon-my-profile-icon-png.png",
      type: "other",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna a imperdiet egestas. Donec in magna quis ligula",
    },
    {
      key: 6,
      image:
        "https://www.pngkit.com/png/detail/372-3729814_profile-icon-my-profile-icon-png.png",
      type: "",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna a imperdiet egestas. Donec in magna quis ligula",
    },
    {
      key: 7,
      image:
        "https://www.pngkit.com/png/detail/372-3729814_profile-icon-my-profile-icon-png.png",
      type: "other",
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices urna a imperdiet egestas. Donec in magna quis ligula",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://www.pngkit.com/png/detail/372-3729814_profile-icon-my-profile-icon-png.png",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
           
              <p style={{fontSize :"2rem"}}>react room</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
            <FontAwesomeIcon icon={faSmile}/>
            </button>
            <input
              type="text"
              placeholder="Taper votre message"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <FontAwesomeIcon icon={faPaperPlane}/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

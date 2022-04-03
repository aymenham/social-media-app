import React, { Component } from "react";
import Avatar from "../chatList/Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
    this.USER_URL_PICTUR = "http://localhost:7000/app/storage/pictures/users/"
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>19 mins</span>
          </div>
        </div>
        <Avatar userData={this.props.userData} setSelectedUSer={this.props.setSelectedUSer} isOnline="active" image={this.USER_URL_PICTUR+this.props.image} />
      </div>
    );
  }
}

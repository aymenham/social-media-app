import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };

  

  constructor(props){
    super(props)
    this.USER_URL_PICTUR = "http://localhost:7000/app/storage/pictures/users/"
  
  }
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={this.USER_URL_PICTUR+this.props.user["avatar"]} />
          </div>
          <h3 className="user-profile-name">{this.props.user["name"]}</h3>
        </div>
        <div className="profile__card">
            <button> consulter </button>
        </div>
      </div>
    );
  }
}

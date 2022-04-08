import React, { Component } from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import "./userProfile.css";

const UserProfile = (props) => {
  const USER_URL_PICTUR = "http://localhost:7000/app/storage/pictures/users/"
  const pathname = useLocation().pathname
   const  parentPath = pathname.substring(0, pathname.lastIndexOf("/"));

  
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img src={USER_URL_PICTUR+props.user["avatar"]} />
        </div>
        <h3 className="user-profile-name">{props.user["name"]}</h3>
      </div>
      <div className="profile__card">
          <Link   to={parentPath+"/"+"profil/"+props.user["_id"]}>consulter profile</Link>
      </div>
    </div>
  );
};

export default UserProfile;

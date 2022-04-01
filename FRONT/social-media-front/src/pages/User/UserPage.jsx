import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { faBook, faCode , faQuestion, faUser,faSignOut , faGamepad} from "@fortawesome/free-solid-svg-icons"
import {
    Outlet
  } from "react-router-dom";
const UserPage = () => {
    const NavigationData = [{
        title :"chat",
        to :"chat",
        icon : faCode
    } , 
   , 

      {
        title :"posts",
        to :"posts",
        icon : faBook
    } ,
  
      {
        title :"quiz",
        to :"quizs",
        icon : faQuestion
    } ,
    {
        title :"game",
        to :"game",
        icon : faGamepad
    } ,
      {
        title :"Profile",
        to :"profil",
        icon : faUser
    } ,
      {
        title :"out",
        to :"/",
        icon : faSignOut
    }

]
    return (
        <div className='admin-container'>
        <Navigation data={NavigationData} />
        <Outlet />  
        </div>
    );
};

export default UserPage;
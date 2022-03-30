import React from 'react';
import {
  Outlet
} from "react-router-dom";
import Navigation from '../../Components/Navigation/Navigation';
import { faBook, faCode , faQuestion, faUser, faWon} from "@fortawesome/free-solid-svg-icons"
 
const Admin = ():JSX.Element => {
    const NavigationData = [{
        title :"rooms",
        to :"rooms",
        icon : faCode
    } , 
    {
        title :"users",
        to :"users",
        icon : faUser
    } , 

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
        title :"statics",
        to :"statics",
        icon : faWon
    }

]
    return (
        <div className='admin-container'>
        <Navigation data={NavigationData} />
        <Outlet />  

        </div>
    );
};

export default Admin;
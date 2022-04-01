import React, { Component, useEffect, useState } from "react";
import "./chatBody.css";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import {MessageChatContext} from '../../../../store/context/user.admin'
import { getAllMessagesRoom } from "../../../../api/Chat.api";
const ChatBody = ()=> {


  const [chatMessges , setChatMessages] = useState([])


  const getMessageRoomAsync = async ()=>{

    try {
     // await  getAllMessagesRoom()
    } catch (error) {
      
    }

  }

  useEffect(()=>{

    getMessageRoomAsync()
  } , [])


    return (
      <div className="main__chatbody">
      <MessageChatContext.Provider value={{chatMessges : chatMessges , setChatMessages : setChatMessages}}>
        <ChatContent />
        <UserProfile />
        </MessageChatContext.Provider>
      </div>
    );
  
}

export default ChatBody;



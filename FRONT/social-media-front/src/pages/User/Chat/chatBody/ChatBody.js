import React, { Component, useEffect, useState } from "react";
import "./chatBody.css";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import {MessageChatContext} from '../../../../store/context/user.admin'
import { getAllMessagesRoom } from "../../../../api/Chat.api";
import { useParams } from "react-router-dom";
const ChatBody = ()=> {


  const [chatMessges , setChatMessages] = useState([])
  const [selectedUser , setSelectedUSer] = useState(null)
  const params = useParams()

  const getMessageRoomAsync = async ()=>{

    try {
    const result  =  await  getAllMessagesRoom(params["id"])
    setChatMessages(result.data)
    } catch (error) {
      
    }

  }

  useEffect(()=>{    
    getMessageRoomAsync()
  } , [])



  console.log("user selcted" , selectedUser);
    return (
      <div className="main__chatbody">
     
        <ChatContent roomID={params["id"]} chatData ={chatMessges} setSelectedUSer={setSelectedUSer}  />
       {selectedUser !=null ?  <UserProfile user={selectedUser} /> : null} 
      
      </div>
    );
  
}

export default ChatBody;



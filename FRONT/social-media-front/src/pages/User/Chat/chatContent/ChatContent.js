import React, { Component, useState, createRef, useEffect } from "react";
import "./chatContent.css";
import ChatItem from "./ChatItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons'
import { getUser } from "../../../../api/User.api";
import { getTokenInfo } from "../../../../storage/localStorage";
import io from 'socket.io-client'
export default class ChatContent extends Component {

  messagesEndRef = createRef(null);



  constructor(props) {
    super(props);
    this.socket = io("http://localhost:7000")
    this.tokenInfo = getTokenInfo()
    this.onGetMessageSocket = this.onGetMessageSocket.bind(this)
    this.state = {
      chat: [],
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };


   async componentDidUpdate(prevProps){

  if(prevProps.chatData != this.props.chatData) {
   
    const room = this.props.chatData[0]
    const dataRoom = room["data"]
    const chatItms = []
     dataRoom.map(data=>{
      
      this.storeData(data , chatItms , dataRoom)
    }) 
  }

}

   async storeData(data , chatItms , dataRoom ) {
  
    const userID = data["userID"]
    const result = await getUser(userID)
    const user = result.data
    const chatItem = {
    key: data["_id"],
    user: user,
    type: this.tokenInfo.id ==userID ? "" :"other",
    msg: data["message"],
    time : data["time"]
                }

                
    chatItms.push(chatItem)            

    if(chatItms.length == dataRoom.length) {

      chatItms.sort(function(a, b) {
        return a.time - b.time;
      });

      this.setState({chat : chatItms})
    }
  }

  async onGetMessageSocket(data){

     const userID = data.user
    const message = data.message
    const result = await getUser(userID)
    const user = result.data
    
    const ChatItm = {
      key: Math.random(),
      type:  this.tokenInfo.id ==user["_id"] ? "" :"other", 
      msg: message,
      user: {
        ...user
      } ,
      time : Date.now()
       
    };
 
    this.setState(prevState => 
      (  { chat: [...prevState.chat , ChatItm]  })
      );
    this.scrollToBottom(); 
    this.setState({ msg: "" });

  }

  componentDidMount() {

    this.socket.emit("join_room" , {userName : this.tokenInfo.name , roomID : this.props.roomID} ,(error)=>{
      if(error) alert(error)
    })

    this.socket.on("message" , this.onGetMessageSocket)
  
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {

          this.socket.emit("save_message" , {
            roomID : this.props.roomID , 
            user : this.tokenInfo.id ,
            message : this.state.msg
          })

         /*  const ChatItm = {
            key: 1,
            type: "",
            msg: this.state.msg,
            user: {
              ...this.tokenInfo
            } ,
            time : Date.now()
             
          };
          this.setState({ chat: [...this.state.chat , ChatItm] });
          this.scrollToBottom();
          this.setState({ msg: "" }); */
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
                  setSelectedUSer={this.props.setSelectedUSer}
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.user["avatar"]}
                  userData={itm.user}
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

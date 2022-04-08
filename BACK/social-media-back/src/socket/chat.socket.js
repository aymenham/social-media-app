const {saveMessageController} = require("../controllers/Chat.controller")
module.exports = (io, socket) => {
  const joinRoom = ({roomID , userName}) => {
   
    socket.join(roomID);
    socket.broadcast
      .to(roomID)
      .emit("join_notification", { text: `${userName} has joined the room!` });
  };

  const saveMessage = async ({roomID , user , message}) => {
    //saving in database
    console.log("save message" , message);
    try {
      await saveMessageController(roomID, user, message);
      io.to(roomID).emit("message", {
        user: user,
        message: message,
      });
    } catch (error) {
      console.log(error);
    }

     
  };
 
  const joinRoomXO = ({roomID}) => {
  
    
    const clients = io.sockets.adapter.rooms.get(roomID);
    //to get the number of clients in this room
    const numClients = clients ? clients.size : 0;
    const CASE  = numClients== 0 ? "X":"O" 
    socket.join(roomID);
    io.to(socket.id).emit('case', CASE);

  };

  const sendAction = ({roomID , action})=>{
    
    try {
      console.log(roomID);
      console.log(action);
      io.to(roomID).emit("the_action", {
        action :action
      });
    } catch (error) {
     
    }
  }

  socket.on("join_room", joinRoom);
  socket.on("save_message", saveMessage);
  socket.on("join_xo", joinRoomXO);
  socket.on("send_action", sendAction);
};

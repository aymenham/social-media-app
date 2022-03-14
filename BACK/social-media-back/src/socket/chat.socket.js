const {saveMessageController} = require("../controllers/Chat.controller")
module.exports = (io, socket) => {
  const joinRoom = ({roomID , userName}) => {
    console.log(roomID);
    socket.join(roomID);
    socket.broadcast
      .to(roomID)
      .emit("join_notification", { text: `${userName} has joined the room!` });
  };

  const saveMessage = async ({roomID , user , message}) => {
    //saving in database
    try {
      saveMessageController(roomID, user, message);
      io.to(roomID).emit("message", {
        user: user,
        message: message,
      });
    } catch (error) {
      console.log(error);
    }

     
  };

  socket.on("join_room", joinRoom);
  socket.on("save_message", saveMessage);
};

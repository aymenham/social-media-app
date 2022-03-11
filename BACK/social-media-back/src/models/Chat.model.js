const mongoose = require("mongoose");

const { Schema } = mongoose;

const Message = {
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  message : {required : "message is required" , type : String} ,
  time : Number
};
const ChatSchema = new Schema({
  roomID: { type: Schema.Types.ObjectId, ref: "Theme"},
  data: [Message],
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;

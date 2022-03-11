const mongoose = require("mongoose");
const Chat = require("../models/Chat.model")
const { Schema } = mongoose;

const ThemeSchema = new Schema({
  name: { required:true, type: String },
  avatar: { required:true, type: String },
});

const Theme = mongoose.model("Theme", ThemeSchema);

Theme.on("save" , async (theme)=>{
  const roomID = theme["_id"]
  const chat = {
    roomID : roomID ,
    data : []
  }

  try {
    await Chat.create(chat);
  } catch (error) {
    console.log(error);
  }
})

module.exports = Theme;

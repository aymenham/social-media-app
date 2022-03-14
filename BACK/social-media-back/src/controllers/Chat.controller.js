const { json } = require("express/lib/response")
const Chat = require("../models/Chat.model")

exports.getAllMessageOfRomm = async (req , res)=>{
    const roomID = req.params.id
    try {
        const chat = await Chat.find({roomID : roomID })
        res.status(200).json(chat)
    } catch (error) {
        res.status(400).json({message : "can't get messages"})
    }
}

exports.saveMessageController = async (roomID , userID , message)=>{

    try {
        const dataElement = {
          userID: userID,
          message: message,
          time : Date.now(),
        };
        const chat = await Chat.findOneAndUpdate(
          { roomID: roomID },
          { $push: { data: dataElement } }
        );
    } catch (error) {
        console.log(error.message);
    }

}


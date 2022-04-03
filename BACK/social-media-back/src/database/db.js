const mongoose = require("mongoose");
const { saveMessageController } = require("../controllers/Chat.controller");
const  {DB_URL}  = require("../utils/Constants")

const ConnectToDataBase = ()=>{

    const mongoDB = DB_URL;
    mongoose.connect(
      DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    //Get the default connection
    const connection = mongoose.connection;

    connection.on("error", (err) => {
      console.log("err", err);
    });
    connection.on("connected", (err, res) => {
      console.log("database mongoose is connected");
     // saveMessageController("6247060f454b52176579a85a" ,"624868fc7ad676a45cc1d5cf" ,"oui cava et toi")
    });

    return connection
}


module.exports = ConnectToDataBase

const mongoose = require("mongoose")
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
    });

    return connection
}


module.exports = ConnectToDataBase

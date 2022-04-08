const mongoose = require("mongoose");

const { Schema } = mongoose;

const XOSchema = new Schema({
  name: { required:true, type: String },
 
});

const XO = mongoose.model("XO", XOSchema);



module.exports = XO;
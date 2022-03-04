const mongoose = require("mongoose")

const {Schema} = mongoose


const UserSchema = new Schema({
  email: { required: "Email is required", type: String },
  password: { required: "password is required", type: String, minlength: 8 },
  name: { required: "name is required", type: String },
  avatar: String,
  rule: { type: String, enum: ["USER", "ADMIN"] },
});



const User = mongoose.model("User" , UserSchema)

module.exports = User
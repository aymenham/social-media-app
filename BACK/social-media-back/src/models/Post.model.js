const mongoose = require("mongoose");

const { Schema } = mongoose;


const PostSchema = new Schema({
  title: { required:"Title is required", type: String },
  body: { required :"body is required", type: String },
  avatar : {required : "avatar is required" , type:String},
  tags: [String],
  theme: { type: Schema.Types.ObjectId, ref: "Theme" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  type : {type:String , enum:["POST","PROBLEM"]}
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

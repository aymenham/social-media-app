const { json } = require("express/lib/response");
const Post = require("../models/Post.model");
const {getAllDataOfModal , getModal , createModal , updateModal , deleteModal} = require("../utils/CRUD")
exports.getAllPost = (req, res) => {
 getAllDataOfModal(Post , req , res)
};

exports.getPost = (req, res) => {
  getModal(Post, req, res);
};

exports.createPost = (req, res) => {
  createModal(Post, req, res);
};

exports.updatePost = (req, res) => {
 updateModal(Post , req , res)
};

exports.deletePost = (req, res) => {
 deleteModal(Post, req, res);
};

exports.getPostsOfRoom = async  (req, res) => {

  const id = req.params.id
  try {
    const result = await Post.find({theme : id})
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }

 };
 exports.getPostsOfUser = async  (req, res) => {

  const id = req.params.id
  try {
    const result = await Post.find({user : id})
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }

 };

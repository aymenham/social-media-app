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

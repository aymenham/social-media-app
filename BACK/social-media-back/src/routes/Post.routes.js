const express = require("express");
const Router = express.Router();
const {uploadAvatarPictur} = require("../middlewares/picture.middleware")
const { Protect } = require("../middlewares/auth.middleware");

const {
  getAllPost,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/Post.controller");
Router.route("/posts")
  .get(Protect, getAllPost)
  .post(Protect, uploadAvatarPictur("posts"), createPost);
Router.route("/posts/:id")
  .get(Protect, getPost)
  .delete(Protect, deletePost)
  .put(Protect, updatePost);

  module.exports = Router

const express = require("express");
const Router = express.Router();

const {
  getAllPost,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/Post.controller");
Router.route("/posts").get(getAllPost).post(createPost);
Router.route("/posts/:id")
  .get(getPost)
  .delete(deletePost)
  .put(updatePost);

  module.exports = Router

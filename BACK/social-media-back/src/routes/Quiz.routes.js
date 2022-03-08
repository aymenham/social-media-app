const express = require("express");
const Router = express.Router();
const {uploadAvatarPictur} = require("../middlewares/picture.middleware")
const {
 getAllQuiz,
 getQuiz ,
 createQuiz ,
 updateQuiz , 
 deleteQuiz
} = require("../controllers/Quiz.controller");

Router.route("/quizs").get(uploadAvatarPictur("quizs"), getAllQuiz).post(createQuiz);
Router.route("/quizs/:id")
  .get(getQuiz)
  .delete(deleteQuiz)
  .put(updateQuiz);

module.exports = Router;

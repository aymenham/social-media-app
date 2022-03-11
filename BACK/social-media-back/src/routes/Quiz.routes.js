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
const { Protect } = require("../middlewares/auth.middleware");

Router.route("/quizs").get( Protect , getAllQuiz).post( Protect ,uploadAvatarPictur("quizs") ,createQuiz);
Router.route("/quizs/:id")
  .get(Protect, getQuiz)
  .delete(Protect, deleteQuiz)
  .put(Protect, updateQuiz);

module.exports = Router;

const express = require("express");
const Router = express.Router();

const {
 getAllQuiz,
 getQuiz ,
 createQuiz ,
 updateQuiz , 
 deleteQuiz
} = require("../controllers/Quiz.controller");

Router.route("/quizs").get(getAllQuiz).post(createQuiz);
Router.route("/quizs/:id")
  .get(getQuiz)
  .delete(deleteQuiz)
  .put(updateQuiz);

module.exports = Router;

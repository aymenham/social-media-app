const Quiz = require("../models/Quiz.model");
const {createModal , deleteModal , getAllDataOfModal , getModal } = require("../utils/CRUD")
exports.getAllQuiz = (req, res) => {
  getAllDataOfModal(Quiz , req ,res)
};

exports.getQuiz = (req, res) => {
  getModal(Quiz , req ,res)
};

exports.createQuiz = (req, res) => {
  
  createModal(Quiz , req , res)

};

exports.updateQuiz = (req, res) => {
  res.status(200).json({ message: "update quiz" });
};

exports.deleteQuiz = (req, res) => {
 deleteModal(Quiz , req ,res)
};

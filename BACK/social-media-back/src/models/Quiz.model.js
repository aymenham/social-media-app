const mongoose = require("mongoose");

const { Schema } = mongoose;

const Question = {
  question: { type: String, required: "question is required" },
  answers: {type:[String], required: true},
  correctAnswer: { type: Number, required: "correct answer is required" },
};

const Player = {
  user: { type: Schema.Types.ObjectId, ref: "User" },
  percentage : {type : String}
};

const QuizSchema = new Schema({
  roomID: { required :"theme id is reuired", type: Schema.Types.ObjectId, ref: "Theme" },
  title: { required: "title is required", type: String },
  avatar: { required: "avatar is required", type: String },
  questions: { type: [Question], required: "questions are required" },
  level: {
    type: String,
    enum: ["EASY", "MEDIUM", "HARD"],
    required: "level is required",
  },
  players: [Player],
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;

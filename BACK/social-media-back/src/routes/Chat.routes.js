const express = require("express");
const Router = express.Router();
const {getAllMessageOfRomm} = require("../controllers/Chat.controller");

Router.route("/chat/:id")
  .get(getAllMessageOfRomm)


module.exports = Router;

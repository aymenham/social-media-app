const express = require("express");
const Router = express.Router();

const {getAllTheme , getTheme , createTheme , deleteTheme , updateTheme} = require("../controllers/Theme.controller")
Router.route("/themes").get(getAllTheme).post(createTheme);
Router.route("/themes/:id")
  .get(getTheme)
  .delete(deleteTheme)
  .put(updateTheme);
  
module.exports = Router 
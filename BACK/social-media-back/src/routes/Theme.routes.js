const express = require("express");
const Router = express.Router();
const {uploadAvatarPictur} = require("../middlewares/picture.middleware")
const {getAllTheme , getTheme , createTheme , deleteTheme , updateTheme} = require("../controllers/Theme.controller")
Router.route("/themes").get(getAllTheme).post( uploadAvatarPictur("themes") ,createTheme);
Router.route("/themes/:id")
  .get(getTheme)
  .delete(deleteTheme)
  .put(updateTheme);
  
module.exports = Router 
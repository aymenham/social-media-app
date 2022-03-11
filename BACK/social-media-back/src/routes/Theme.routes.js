const express = require("express");
const Router = express.Router();
const {uploadAvatarPictur} = require("../middlewares/picture.middleware")
const {getAllTheme , getTheme  , createTheme , deleteTheme , updateTheme} = require("../controllers/Theme.controller")
const { Protect } = require("../middlewares/auth.middleware");

Router.route("/themes")
  .get(Protect, getAllTheme)
  .post( createTheme);
Router.route("/themes/:id")
  .get(Protect, getTheme)
  .delete(Protect, deleteTheme)
  .put(Protect, updateTheme);
  
module.exports = Router 
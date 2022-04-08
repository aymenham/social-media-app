const express = require("express");
const Router = express.Router();
const { Protect } = require("../middlewares/auth.middleware");
const { getXO , deleteXO , createXO  , getAllXO } = require("../controllers/XO.controller") ;

Router.route("/xo")
  .get(getAllXO )
  .post( createXO);
Router.route("/xo/:id")
  .get(getXO)
  .delete(deleteXO)

  module.exports = Router
  
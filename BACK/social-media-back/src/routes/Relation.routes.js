const express = require("express");
const Router = express.Router();
const {checkUserInRelation , checkFollowerInRelation} = require("../middlewares/user.middleware")
const {
  getRelation,
  createRelation,
  deleteRelation,
 
} = require("../controllers/Relation.controller");

Router.route("/relations/:id")
  .get(getRelation)
  .post(checkUserInRelation , checkFollowerInRelation , createRelation)
  .delete(deleteRelation)
  

module.exports = Router;

const express = require("express");
const Router = express.Router();
const {checkUserInRelation , checkFollowerInRelation} = require("../middlewares/user.middleware")
const { Protect } = require("../middlewares/auth.middleware");

const {
  getRelation,
  createRelation,
  deleteRelation,
 
} = require("../controllers/Relation.controller");

Router.route("/relations/:id")
  .get(Protect, getRelation)
  .post(Protect, checkUserInRelation, checkFollowerInRelation, createRelation)
  .delete(Protect, deleteRelation);
  

module.exports = Router;

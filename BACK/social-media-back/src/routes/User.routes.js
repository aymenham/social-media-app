const express = require("express")
const Router =  express.Router()
const {checkUserExist} = require("../middlewares/user.middleware")
const {uploadAvatarPictur} = require("../middlewares/picture.middleware")
const {getAllUser , createUser , getUser , updateUser , deleteUser}  = require("../controllers/User.controller")

Router.route("/users").get(getAllUser).post(checkUserExist, uploadAvatarPictur("users"),createUser)

Router.route("/users/:id").
get(getUser).
delete(deleteUser).
put(updateUser) 

module.exports = Router
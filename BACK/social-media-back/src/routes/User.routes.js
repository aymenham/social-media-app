const express = require("express")
const Router =  express.Router()
const {checkUserExist} = require("../middlewares/user.middleware")
const { Protect } = require("../middlewares/auth.middleware");
const {uploadAvatarPictur} = require("../middlewares/picture.middleware")
const {login,getAllUser , createUser , getUser , updateUser , deleteUser}  = require("../controllers/User.controller")

Router.route("/users").get(Protect ,getAllUser).post(checkUserExist, uploadAvatarPictur("users"),createUser)

Router.route("/users/:id").
get(Protect ,getUser).
delete(Protect ,deleteUser).
put(Protect ,updateUser) 

Router.route("/login").get(login);

module.exports = Router
const User = require("../models/User.model")
const bcrypt = require("bcrypt");
const {getAllDataOfModal  , getModal , createModal , updateModal , deleteModal} = require("../utils/CRUD")
const {hashPassword} = require("../utils/Security")
exports.getAllUser = (req , res)=>{

    getAllDataOfModal(User ,req , res)
}

exports.getUser = (req, res) => {
  getModal(User , req , res)
};

exports.createUser = async (req, res) => {
 
   const user = req.body;
   const password = user["password"];
   const passwordHashed = await hashPassword(password , 10)
   if(passwordHashed == null){
            res.status(500).json({ message: "Erreur in password hash" });

   } else {
     
    try {
      user["password"] = passwordHashed;
      const result = await User.create(user);
      res.status(201).json({ message: result });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }

   } 
           
   

};

exports.updateUser = (req, res) => {
 updateModal(User ,req ,res)
};

exports.deleteUser = (req, res) => {
 deleteModal(User ,req ,res)
};
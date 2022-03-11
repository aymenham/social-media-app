const User = require("../models/User.model")
const jwt = require("jsonwebtoken")

const {getAllDataOfModal  , getModal , createModal , updateModal , deleteModal} = require("../utils/CRUD")
const {hashPassword , checkPassword} = require("../utils/Security")


exports.login = async (req, res) => {

  const {email , password} = req.body

  if(!email || !password) {
    res.status(400).json({ message: "enter email and password please" });
  }
  const user =  await User.find({email : email})

  if(user.length<=0) {

    res.status(401).json({message :"no user found"})
  } else {
      const isPasswordMatch = await checkPassword(password , user[0]["password"])
    if (isPasswordMatch) {
      const tokenData = {
        id : user[0]["_id"] ,
        name : user[0]["name"]
      }
     const token =   jwt.sign(tokenData, process.env.JWT_TOKEN);
      res.status(200).json({ token: token });
    } else {
      res.status(401).json({ message: "wrong password" });
    }

  }
  
};  

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



const jwt = require("jsonwebtoken")
const {headers}  = require("../utils/Constants")
exports.Protect = async (req, res , next)=>{

    const token = req.headers[headers.tokenHeader];

    if(!token){
        res.status(403).json({message :"not authorized"})
    } else {
       try {
         jwt.verify(token, process.env.JWT_TOKEN);
          next();
       } catch (err) {
             res.status(403).json({ message: "not authorized" });
       }
       
       
    }

}
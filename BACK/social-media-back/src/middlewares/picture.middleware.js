const {v4 : uuidv4} = require("uuid")
const {PROJECT_DIR} = require("../../Settings")
module.exports = {

    uploadAvatarPictur  : (fileName)=>{
       
        return (req, res ,next)=>{
            
            if (!req.files || Object.keys(req.files).length === 0) {
                next()
                return
            }

        avatarFile = req.files.avatar;
        
        const name = uuidv4();
       uploadPath = `${PROJECT_DIR}/pictures/${fileName}/${name}.png`


        avatarFile.mv(uploadPath, function (err) {
            if (err) return res.status(500).send(err);
            if(req.body["body"]){
                req.body = JSON.parse(req.body["body"]);
            }
            req.body["avatar"] = name+".png"
            next()
        });
    }
    }

}
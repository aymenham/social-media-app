
const {v4 : uuidv4} = require("uuid")
const {PROJECT_DIR} = require("../../Settings")
module.exports = {

    uploadAvatarPictur  : (fileName)=>{
       
        return (req, res ,next)=>{
            
        let avatarFile;
        let uploadPath;
        


            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send("No files were uploaded.");
            }

        avatarFile = req.files.avatar;
        
        const name = uuidv4();
       uploadPath = `${PROJECT_DIR}/pictures/${fileName}/${name}.png`


        avatarFile.mv(uploadPath, function (err) {
            if (err) return res.status(500).send(err);
                
            req.body["avatar"] = name+".png"
            next()
        });
    }
    }

}
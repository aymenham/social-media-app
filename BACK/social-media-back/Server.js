 //import dependencies
const express = require("express")
const dotEnv =  require("dotenv").config()
//import constants 
const  {PORT , API_URL}  = require("./src/utils/Constants") 
// import from intern 
const ConnectToDataBase = require("./src/database/db")
// import routes 
const userRoutes = require("./src/routes/User.routes")
const themeRoutes = require("./src/routes/Theme.routes")
const quizRoutes = require("./src/routes/Quiz.routes")
const postRoutes = require("./src/routes/Post.routes")
const relationRoutes = require("./src/routes/Relation.routes")

const app = express()
app.use(express.json())

app.use(API_URL , userRoutes )
app.use(API_URL, themeRoutes);
app.use(API_URL, quizRoutes);
app.use(API_URL, postRoutes);
app.use(API_URL, relationRoutes);

const fileUpload = require("express-fileupload");
 
app.use(fileUpload())

//for upload picturs
app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/somewhere/on/your/server/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });
});

app.listen(PORT , ()=>{

    console.log("server express start");
    ConnectToDataBase()
}) 
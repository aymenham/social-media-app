 //import dependencies
const express = require("express")
const dotEnv =  require("dotenv").config()
const fileUpload = require("express-fileupload");
const { v4: uuidv4 } = require("uuid");
//import constants 
const  {PORT , API_URL , STORAGE_URL}  = require("./src/utils/Constants") 
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
app.use(fileUpload())


app.use(API_URL , userRoutes )
app.use(API_URL, themeRoutes);
app.use(API_URL, quizRoutes);
app.use(API_URL, postRoutes);
app.use(API_URL, relationRoutes);

// for pictures
app.use(STORAGE_URL + "/users", express.static("pictures/users")); 
app.use(STORAGE_URL+"/themes", express.static("pictures/themes")); 
app.use(STORAGE_URL+"/posts", express.static("pictures/posts")); 
app.use(STORAGE_URL + "/quizs", express.static("pictures/quizs")); 
     

app.listen(PORT , ()=>{

    console.log("server express start");
    ConnectToDataBase()
}) 
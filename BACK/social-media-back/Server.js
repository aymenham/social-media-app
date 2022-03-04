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


app.use("/upload" ,(req ,res)=>{
    res.status(200).json({message :"hello upload"})
})

app.listen(PORT , ()=>{

    console.log("server express start");
    ConnectToDataBase()
}) 
 //import dependencies
const http = require("http");
const express = require("express")
const dotEnv =  require("dotenv").config()
const fileUpload = require("express-fileupload");
const cors = require("cors")
const {Server} = require("socket.io")

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
const chatRoutes = require("./src/routes/Chat.routes")
const XORoutes = require("./src/routes/XO.routes")
// import config 
const {ioCors} = require("./src/config/cors")
// import sockets 
const chatSocketHandler = require("./src/socket/chat.socket")


const app = express()
const server = http.createServer(app);


app.use(cors());
app.use(express.json())
app.use(fileUpload())

const io = new Server(server, ioCors);


app.use(API_URL , userRoutes )
app.use(API_URL, themeRoutes);
app.use(API_URL, quizRoutes);
app.use(API_URL, postRoutes);
app.use(API_URL, relationRoutes);
app.use(API_URL, chatRoutes);
app.use(API_URL, XORoutes);


// for pictures
app.use(STORAGE_URL + "/users", express.static("pictures/users")); 
app.use(STORAGE_URL+"/themes", express.static("pictures/themes")); 
app.use(STORAGE_URL+"/posts", express.static("pictures/posts")); 
app.use(STORAGE_URL + "/quizs", express.static("pictures/quizs")); 

// Socket IO config 

const onConnection = (socket)=>{
    chatSocketHandler(io , socket)
}
     

server.listen(PORT , ()=>{

    console.log("server express start");
   
    io.on("connection",onConnection);
    ConnectToDataBase()
}) 
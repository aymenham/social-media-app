import { useState , useEffect } from 'react';
import io from "socket.io-client"
import {useParams} from 'react-router-dom'
function XO() {

  const  socket = io("http://localhost:7000")
  const roomID = useParams()["id"]
  const [marker , setMarker] = useState(null)
  const [gameMap, setMap] = useState(
    [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  

  const checkIFGameFinish = ()=>{

    const CASE1 = gameMap[0][0] !=null && gameMap[0][0] == gameMap[1][0] && gameMap[2][0] == gameMap[1][0];
    const CASE2 = gameMap[0][1] !=null && gameMap[0][1] == gameMap[1][1] && gameMap[2][1] == gameMap[1][1];
    const CASE3 = gameMap[0][2] !=null && gameMap[0][2] == gameMap[1][2] && gameMap[2][2] == gameMap[1][2];

    const CASE4 = gameMap[0][0] !=null && gameMap[0][0] == gameMap[0][1] && gameMap[0][2] == gameMap[0][1]; ;
    const CASE5 = gameMap[1][0] !=null && gameMap[1][0] == gameMap[1][1] && gameMap[1][2] == gameMap[1][1]; ;
    const CASE6 = gameMap[2][0] !=null && gameMap[2][0] == gameMap[2][1] && gameMap[2][2] ==gameMap[2][1];

    const CASE7 = gameMap[0][0] !=null && gameMap[0][0] == gameMap[1][1] && gameMap[2][2] == gameMap[1][1]; ;
    const CASE8 = gameMap[2][0] !=null && gameMap[2][0] == gameMap[1][1] && gameMap[0][2] == gameMap[1][1]; ;

    if(CASE1 || CASE2 || CASE3 
                  ||
      CASE4 || CASE5 || CASE6
                ||
       CASE7 || CASE8        
      ) return true

  }



  useEffect(()=>{
   
    socket.on("case" , (result)=>{
     
     setMarker(result)
        
    })

    socket.on("the_action" , (result)=>{
        const action = result["action"]
        const newGameMap = [...gameMap]

        const [index , index1] = action["played"]
        const marker = action["marker"]

        newGameMap[index][index1] = marker
       
       setMap(newGameMap)
          
    })

    socket.emit("join_xo" , {roomID : roomID} ,(error)=>{
      if(error) alert(error)
    })


   
    
  } , [])

  if(checkIFGameFinish()) alert(marker +"  WIN")
 
  return (
    <div className="App">
     
      
        {gameMap.map((line , index) => {
         
          return <div style={{display:"flex"}}>
              {line.map((element , index1) => {
               
               return (
                 <div
                   style={{
                     pointerEvents:
                       gameMap[index][index1] != null
                         ? "none"
                         : "",
                         width :"200px" ,
                         height:"200px" ,
                         background:"red" ,
                         margin :"1rem"
                   }}
                   onClick={() => {
                     const newGameMap = [...gameMap]
                     newGameMap[index][index1] = marker;

                     socket.emit("send_action" , {
                       roomID : roomID ,
                          action : {
                            marker : marker , 
                            played : [index , index1]
                          }
                     })
                    
                        setMap(newGameMap)
                   }}
    
                   className={""}
                 >
                   {gameMap[index][index1] != null ? (
                     <p style={{fontSize:"1.5rem" , color:"#fff" , textAlign:"center"}}>{gameMap[index][index1]}</p>
                   ) : null}
                 </div>
               );
             })}
          </div>
        })}
   
    </div>
  );
}

export default XO;
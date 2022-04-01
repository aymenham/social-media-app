import React from 'react';
import {useNavigate} from 'react-router-dom'


interface RoomProps{
    link : string
    name :string , 
    avatar :string
} 


const RoomCard = ({link , name , avatar}:RoomProps) => {
    const navigate = useNavigate()
    const ROOMS_URL_PICTUR ="http://localhost:7000/app/storage/pictures/themes/"
   
    
    return (
        <div onClick={()=>{
           
            navigate(link+"/chat")
            
        }} className="room-card">
        <div className="room-face room-face1">
            <div className="room-content">
                <div className="room-icon">
                <img className='room-pic' src={`${ROOMS_URL_PICTUR}${avatar}`}  /> 
                </div>
            </div>
        </div>
        <div className="room-face room-face2">
            <div className="room-content">
                <h3>
                    <p style={{textTransform :"uppercase"}}> {name} </p>
                </h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, magni..</p>
            </div>
        </div>
    </div>
    );
};

export default RoomCard;
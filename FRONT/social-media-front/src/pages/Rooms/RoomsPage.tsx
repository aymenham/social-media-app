import React from 'react';
import { useEffect } from 'react';
import RoomCard from '../../Components/RoomCard/RoomCard';
import {getRooms} from '../../api/Room.api'
import { useState } from 'react';

interface RoomProps{
    _id : string
    name :string , 
    avatar :string
} 
const RoomsPage = () => {

    const [rooms , setRooms] = useState<RoomProps[]>([])

    const getRommsAsync = async ()=>{

        try {
            
           const result =  await getRooms()
           setRooms(result.data)
           if(result){

           }

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{

        getRommsAsync()
    } , [])
    return (
        <div className="rooms-container">

          {rooms.map(room=>{
              return <RoomCard key={room._id} link={room._id} name={room.name} avatar={room.avatar} />
          })}

        </div>
    );
};

export default RoomsPage;
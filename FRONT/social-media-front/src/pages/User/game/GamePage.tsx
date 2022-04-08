import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getXORomms } from '../../../api/XO.api';

const GamePage = ():JSX.Element => {

    const  [rooms , setRooms] = useState([])

    const pathname = useLocation().pathname
    const getRoomsEffect = async ()=>{
        try {
            const result = await getXORomms()
            console.log(result);
            
            setRooms(result.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{

        getRoomsEffect()
    } , [])

    
    
    return (
        <div>
            

            {rooms.map(room=>{

              return  (<div>
                <p> {room.name}</p>
              <Link  to={pathname+"/"+room._id} > join </Link>
               </div>)
            })}
         <div>

         </div>
        </div>
    );
};

export default GamePage;
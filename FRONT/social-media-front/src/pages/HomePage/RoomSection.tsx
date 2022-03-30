import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faReact , faJs , faNodeJs } from '@fortawesome/free-brands-svg-icons';


const react = faReact as IconProp;
const js = faJs as IconProp;
const node = faNodeJs as IconProp;

  interface ROOM {
    name : string , 
    description : string ,
    pictur : IconProp 
}


const RoomSection = () => {
    const data :ROOM[] = [

        {name:"react JS" ,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quasi!" ,pictur :react} ,
         {name:"javascript" ,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quasi!" ,pictur :js} ,
          {name:"node JS" ,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quasi!" ,pictur :node}  
    ]
    
    const RoomItem =  ({name ,description , pictur} : ROOM):JSX.Element =>{
        return (
            <div className='room-item'>
                  <h4 className='medium-title'>{name}</h4>
                  <FontAwesomeIcon icon={pictur} />
                
                    <p>{description}</p>
                   
                   
                    <button className='main-btn'>join now</button>
            </div>
        )
    }

    return (
        <div className='room-container'>
            <h1 className='big-title'>join our rooms</h1>
            <div className='room-item-container'>
                      {data.map(room=>{

                return <RoomItem name={room.name} 
                                 description={room.description}
                                 pictur={room.pictur}
                                 key={room.name}

                 />
            })}
            </div>
          
        </div>
    );
};

export default RoomSection;
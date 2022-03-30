import React, { useContext , useEffect, useState } from 'react';
import AddRoom from './AddRoom';
import {getRooms} from '../../../api/Room.api'
import AdminTable from '../../../Components/Admin/AdminTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'

export interface RoomProps{
    name :string , 
    avatar :string
} 

const Rooms = () :JSX.Element => {
    const ROOMS_URL_PICTUR ="http://localhost:7000/app/storage/pictures/themes/"
   
        const [isOpenModal , setOpenModal] = useState<boolean>(false)
        const [rooms , setRooms] = useState<RoomProps[]>([])
        let [roomsData , setRoomsData] = useState<JSX.Element | JSX.Element[]>(<div> no data</div>) 

        const headers = ["image" , "room" , "action"]
        const style ={width : 100/headers.length+"%"}
    const getRoomEffect = async ()=>{
         try {
           const result =  await getRooms()
           setRooms(result.data)
           
        } catch (error) {
            
        }
    }
    useEffect(()=>{

        getRoomEffect()
    }, [])

    useEffect(()=>{
   
           const result =rooms.map(room=>{
                return (
                <div  className="table-row">
                 <div className='table-data'>
                        <div className='avatar-admin-container'>
                        <img className='avatar-admin' src={ROOMS_URL_PICTUR+""+room.avatar}  alt={room.name} /> 
                        </div>    
                </div>       		
				<div style={style} className="table-data">{room.name}</div>
                <div style={style} className="table-data">
                    <FontAwesomeIcon className='font-admin delete-font' icon={faTrash} />  
                <FontAwesomeIcon className='font-admin update-font ' icon={faPen} />    
                </div>
                </div>
                )
            })
            setRoomsData(result)
            
    } , [rooms])

    
    
    return (
      <div>
          
          <button onClick={()=>{
             
              setOpenModal(true)
              
          }} >add new room </button>
            
        <AddRoom isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
         
        <div className='rooms-container'>

            <AdminTable headerStyle={style} headers={headers} >
                {roomsData}
            </AdminTable>
            
        </div>
      </div>
    );
};

export default Rooms;
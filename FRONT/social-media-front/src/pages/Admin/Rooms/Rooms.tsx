import React, { useContext , useEffect, useState } from 'react';
import AddRoom from './AddRoom';
import {getRooms , delteRoom} from '../../../api/Room.api'
import AdminTable from '../../../Components/Admin/AdminTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import SearchInput from '../../../Components/SearchInput/SearchInput';
import {AddUserContext} from '../../../store/context/admin.context'
import DeleteModal from '../../../Components/Modal/DeleteModal';

export interface RoomProps{
    _id : string
    name :string , 
    avatar :string
} 

const Rooms = () :JSX.Element => {
    const ROOMS_URL_PICTUR ="http://localhost:7000/app/storage/pictures/themes/"
   
        const [isOpenModal , setOpenModal] = useState<boolean>(false)
        const [isOpenModalDelete , setOpenModalDelete] = useState<boolean>(false)
        const [delteFunctionModal , setDeleteFunction] = useState<any>(null)
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
    const deleteRoomFunction =  (roomID : string , index : number)=>{
            
            
       return  ()=>{
         
           
         delteRoom(roomID).then(result=>{
            if(result) {

                const newRooms = [...rooms]
                newRooms.splice(index , 1)
                setRooms(newRooms)
                setOpenModalDelete(false)
            }
         }).catch(error=>{

            console.log(error);
            
         }) 
       }
    }
    useEffect(()=>{

        getRoomEffect()
    }, [])

   

    useEffect(()=>{
   
           const result =rooms.map((room , index)=>{
            console.log(room);
                return (
                    
                    
                <div  className="table-row">
                 <div className='table-data'>
                        <div className='avatar-admin-container'>
                        <img className='avatar-admin' src={ROOMS_URL_PICTUR+""+room.avatar}  alt={room.name} /> 
                        </div>    
                </div>       		
				<div style={style} className="table-data">{room.name}</div>
                <div style={style} className="table-data">
                    <FontAwesomeIcon onClick={()=>{
                        setDeleteFunction(()=>deleteRoomFunction(room._id , index))
                        setOpenModalDelete(true)
                    }} className='font-admin delete-font' icon={faTrash} />  
                <FontAwesomeIcon className='font-admin update-font ' icon={faPen} />    
                </div>
                </div>
                )
            })
            setRoomsData(result)
            
    } , [rooms])

  

    console.log(rooms);
    
 
    
    return (
      <div >
          <AddUserContext.Provider value={{roomList : rooms , setRoomList:setRooms}}>
          <div className='room-container-search'>
              <SearchInput />
          <button className='add-button' onClick={()=>{
             
             setOpenModal(true)
             
         }} >add new room </button>
          </div>
            
        <AddRoom isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
         <DeleteModal title={'delete a room'} 
          deleteFunction={delteFunctionModal} 
          isOpenModal={isOpenModalDelete} 
          setOpenModal= {setOpenModalDelete} 
         
          />
        <div className='rooms-container'>

            <AdminTable headerStyle={style} headers={headers} >
                {roomsData}
            </AdminTable>
            
        </div>
        </AddUserContext.Provider>
      </div>
    );
};

export default Rooms;
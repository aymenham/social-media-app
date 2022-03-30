import axios from "../../../api/axios";
import React, { useEffect, useState } from 'react';
import {getAllUser} from '../../../api/User.api'
import AdminTable from "../../../Components/Admin/AdminTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'

interface IUser {
    avatar :string ,
    name :string ,
    email :string
}
const Users = ():JSX.Element => {

    const [users , setUsers] = useState<IUser []>([])
    const [userData , setUserData] = useState<JSX.Element |JSX.Element[]>(<div> no data</div>)
    const headers = ["image" , "name" , "email" , "action"]
    const USER_URL_PICTUR = "http://localhost:7000/app/storage/pictures/users/"
    const style = {width : 100/headers.length+"%"}
    const getUsers = async ()=>{
        try {
            const result = await getAllUser()
            setUsers(result.data)
        } catch (error) {
            console.log(error);
            
        }
        
    }
    useEffect(()=>{
            
        getUsers()
            
    } , [])

    useEffect(()=>{
      const result =users.map(user=>{
          
                return (
                <div  className="table-row">
                 <div className='table-data'>
                        <div className='avatar-admin-container'>
                        <img className='avatar-admin' src={USER_URL_PICTUR+""+user.avatar}  alt={user.name} /> 
                        </div>    
                </div>       		
				<div style={style} className="table-data">{user.name}</div>
                <div style={style} className="table-data">{user.email}</div>
                <div style={style} className="table-data">
                <FontAwesomeIcon className='font-admin delete-font' icon={faTrash} />  
                <FontAwesomeIcon className='font-admin update-font ' icon={faPen} />    
                </div>
                </div>
                )
            })
            setUserData(result)      
    } , [users])

   
    
    return (
        <div>
            <AdminTable headerStyle={style} headers={headers} >
                {userData}   
             </AdminTable>
        </div>
    );
};

export default Users;
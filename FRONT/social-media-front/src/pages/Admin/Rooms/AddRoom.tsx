import React , {ChangeEvent, useState} from 'react';
import Modal from '../../../Components/Modal/Modal';
import {ModalOpenProps} from '../../../Components/Modal/Modal'
import {addRoom} from '../../../api/Room.api'
import { AxiosError } from 'axios';
interface IAddRoom extends ModalOpenProps {

}

type Inputs = {
    title : string ,
    avatar : File | null 
}
const AddRoom = ({isOpenModal , setOpenModal} :IAddRoom) => {
    const classOfMessageBlock:string[] = ["error-message"]
    const [sucess , setSucess] = useState<boolean>(false)
    const [message , setMessage] = useState<string | null>(null)
    const [inputs , setInputs] = useState<Inputs>({
        title : "" ,
        avatar :null
    })
    if(sucess) classOfMessageBlock.push("sucess-message")
    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        const name = event.currentTarget.name
        if(name =="avatar"){
            setInputs({
                ...inputs , 
                [name] : event.currentTarget.files[0]
            })
        } else {
             setInputs({
                ...inputs , 
                [name] : event.currentTarget.value
            })
        }
    }
    const OnSubmit = async ()=>{

        try {
            const formData = new FormData()
            formData.append("avatar" , inputs.avatar)
            const room = {name : inputs.title.trim() , avatar :""}
            formData.append("body" , JSON.stringify(room) )
            const result = await addRoom(formData)
            console.log("data");
            
            if(result.data){
                setSucess(true)
                setMessage("room added")

            }
        } catch (error:any) {
            console.log("error");
            
            const errorBody:AxiosError = error.response.data
                setMessage(errorBody.message)
        }
    }    
    return (
       
           <Modal modalTitle='Add new Room' isOpenModal={isOpenModal} setOpenModal={setOpenModal}>
               <div className='add-room'> 
               <p style={{display : message ? "block" :"none"}} className={classOfMessageBlock.join(" ")}>{message}</p>
                   <input onChange={onChangeHandler} className='input'  type="file" name="avatar" id="" />
                   <input onChange={onChangeHandler} className='input' name='title' type="text" placeholder='name of the room' />
                   <button onClick={OnSubmit} className='submit-button'>ADD</button>
               </div>
           </Modal>
      
    );
};

export default AddRoom;
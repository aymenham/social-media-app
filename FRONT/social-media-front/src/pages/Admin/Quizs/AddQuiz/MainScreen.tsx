 import react , {useContext, useEffect, useState} from 'react'
import { AddQuizContext } from '../../../../store/context/admin.context'
 import {RoomProps} from '../../Rooms/Rooms'
 import {getRooms} from '../../../../api/Room.api'

 interface RoomData extends RoomProps {

    _id : string
 } 
 const MainScreen = ():JSX.Element=>{
    
    const AddQuestionContextConsummer = useContext(AddQuizContext)
    const {stateAddQuestion , dispatchAddQuestion} = AddQuestionContextConsummer

    const [rooms , setRooms] = useState<RoomData []>([])


    const  getRoomsEffect = async ()=>{

        try {
             const result = await getRooms()
         
             setRooms(result.data)
             
          
        } catch (error) {
            console.log(error);
            
        }
    } 

    useEffect(()=>{
            getRoomsEffect()
    } , [])


            return (
                <div className='main-screen-quiz'>

                        <select className='input' name="" id="">
                         {rooms.map(room=>{

                        return   <option key={room._id} value={room._id}>{room.name}</option>
                         })}
                        </select>

                    <input onChange={(event)=>{
                        dispatchAddQuestion({type :"change_avatar" , value :event.currentTarget.files[0]})
                    }} className='input' type="file" name="" id="" />
                     <input value={stateAddQuestion.title} onChange={(event)=>{
                            dispatchAddQuestion({type : "change_title" , value:event.currentTarget.value})
                     }} className='input' type="text" name="" id="" placeholder='title'/>
                     
                     <input onChange={(event)=>{
                         dispatchAddQuestion({type : "change_number_question" , value:Number(event.currentTarget.value)})
                       
                     }} className='input' type="number" value={stateAddQuestion.number_question} placeholder='number of question' />
                     <select value={stateAddQuestion.level}  onChange={(event)=>{
                         
                             dispatchAddQuestion({type : "change_level" , value:event.currentTarget.value})
                         
                     }} className='input' name="" id="">
                        <option value="EASY">EASY</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HARD">HARD</option>
                    </select>
                
                </div>
            )
    }

    export default MainScreen
import React, { Dispatch } from "react";
import {IQuiz ,ACTION , STATE} from '../../store/reducers/admin.reducer'
import {RoomProps} from '../../pages/Admin/Rooms/Rooms'
type IAddQuestionContext ={
    stateAddQuestion : STATE | null,
    dispatchAddQuestion : React.Dispatch<ACTION> |null
}

type IUserContext =  {

    roomList : RoomProps [] ,
    setRoomList : React.Dispatch<React.SetStateAction<RoomProps[]>>
}

type IQuizContext = {
    quizList : IQuiz[] , 
    setQuizList : React.Dispatch<React.SetStateAction<IQuiz[]>>
}
export const AddQuizContext = React.createContext<IAddQuestionContext>({
    stateAddQuestion :null ,
    dispatchAddQuestion : null
})


export const QuizContext  = React.createContext<IQuizContext>({
   quizList : [] ,
   setQuizList : null

})

export const AddUserContext = React.createContext<IUserContext>({
    setRoomList :null ,
    roomList : []
})
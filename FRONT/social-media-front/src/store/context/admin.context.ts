import React, { Dispatch } from "react";
import {IQuiz ,ACTION , STATE} from '../../store/reducers/admin.reducer'
type IAddQuestionContext ={
    stateAddQuestion : STATE | null,
    dispatchAddQuestion : React.Dispatch<ACTION> |null
}

type IQuizContext = {
    quizList : IQuiz[] , 
    setQuizList : React.Dispatch<React.SetStateAction<number>>
}
export const AddQuizContext = React.createContext<IAddQuestionContext>({
    stateAddQuestion :null ,
    dispatchAddQuestion : null
})


export const QuizContext  = React.createContext<IQuizContext>({
   quizList : [] ,
   setQuizList : null

})
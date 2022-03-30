import { stat } from "fs"

type Question = {
question : string  ,
answers : string [] , 
correctAnswer : number
}

type Player = {
    id : string ,
    percentage : number
}

export interface IQuiz  {
    title :string , 
    avatar : File | null ,
    level :string ,
    questions : Question[]
    players : Player [] 
}

export type ACTION = {type : "change_title" , value:string} |
                    {type : "change_avatar" ,  value:File} |
                    {type : "change_level"   , value:string} |
                    {type : "change_room"   , value:string} |
                    {type : "add_question" , value:Question}  |
                    {type : "delete_question"} |  
                    {type : "change_number_question" ,  value:number} 

export interface STATE extends IQuiz  {
    number_question :number
}


export const  addQuizReducer = (state:STATE , action:ACTION):STATE=>{
        switch(action.type){
            case "change_title" :
                return {
                    ...state ,
                    title :action.value
                }
            case "change_avatar" :
                return {
                    ...state ,
                    avatar :action.value
                }  

                  case "change_level" :
                return {
                    ...state ,
                    level :action.value
                } 
                 case "change_number_question" :
                return {
                    ...state ,
                    number_question :action.value
                } 

                  case "add_question" :
                      const array = [...state.questions]
                      array.push(action.value)
                return {
                    ...state ,
                    questions :[...array]
                    
                } 

                   case "delete_question" :
                      const array2 = [...state.questions]
                      array2.pop()
                return {
                    ...state ,
                    questions :[...array2]
                    
                } 


                 
        }
}
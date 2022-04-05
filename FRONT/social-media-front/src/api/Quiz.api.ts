import axios , {} from "../api/axios"
import { AxiosResponse } from "axios"
import {getToken} from '../storage/localStorage'
const quizUrl:string = "/quizs"


const setHeader = () : Object=>{
    const token = getToken("token")
    return {
    headers: { "x-auth-token": token }
}
}
export const addQuiz = (body:FormData):Promise<AxiosResponse<any, any>>=>{
      
    return axios.post(quizUrl , body , setHeader())
}

export const getQuizs = ():Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(quizUrl ,setHeader())
}

export const deleteQuiz= (quizID: string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.delete(quizUrl+"/"+quizID ,setHeader())
}

export const getQuizsByRoom = (roomID : string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(quizUrl+"/rooms/"+roomID ,setHeader())
}

export const getQuiz = (quizID:string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(quizUrl+"/"+quizID ,setHeader())
}
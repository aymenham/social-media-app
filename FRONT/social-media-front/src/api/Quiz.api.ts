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
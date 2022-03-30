import axios , {} from "../api/axios"
import { AxiosResponse } from "axios"
import {getToken} from '../storage/localStorage'
const userUrl:string = "/users"
const loginUrl ="/login"
interface ILogin {
    email : string ,
    password :string
}
const setHeader = () : Object=>{
    const token = getToken("token")
    return {
    headers: { "x-auth-token": token }
}
}
export const registerUser = (body:FormData):Promise<AxiosResponse<any, any>>=>{
      
    return axios.post(userUrl , body)
}

export const loginUser = (body:ILogin):Promise<AxiosResponse<any, any>>=>{

    return axios.post(loginUrl ,body)
}

export const getAllUser = ():Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(userUrl , setHeader())
}
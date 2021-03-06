import { AxiosResponse } from 'axios'
import axios from './axios'
import {getToken} from '../storage/localStorage'
const roomsUrl:string = "/themes"

const setHeader = () : Object=>{
    const token = getToken("token")
    return {
    headers: { "x-auth-token": token }
};
}

export const addRoom = (body:FormData):Promise<AxiosResponse<any, any>>=>{
      
    return axios.post(roomsUrl , body , setHeader())
}

export const getRooms = ():Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(roomsUrl , setHeader())
}

export const getRoom = (roomId: string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(roomsUrl+"/"+roomId , setHeader())
}

export const delteRoom = (roomId: string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.delete(roomsUrl+"/"+roomId , setHeader())
}
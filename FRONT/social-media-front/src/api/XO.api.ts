import { AxiosResponse } from 'axios'
import axios from './axios'
const roomsUrl:string = "/xo"





export const getXORomms = ():Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(roomsUrl)
}

export const getXORoom = (roomId: string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(roomsUrl+"/"+roomId)
}

export const delteRoom = (roomId: string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.delete(roomsUrl+"/"+roomId)
}
import axios , {} from "../api/axios"
import { AxiosResponse } from "axios"
import {getToken} from '../storage/localStorage'
const relationUrl:string = "/relations"


const setHeader = (userFollow :string) : Object=>{
    const token = getToken("token")
    return {
    headers: { "x-auth-token": token , 
                "user-follow" : userFollow
            }
}
}


export const FollowUser = (userID:string , userWantToFollow : string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.post(relationUrl+"/"+userID  , {} , setHeader(userWantToFollow))
}

export const UnFollowUser = (userID:string , userWantToFollow : string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.delete(relationUrl+"/"+userID  ,  setHeader(userWantToFollow))
}


export const getRelation = (userID : string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(relationUrl+"/"+userID  , setHeader(""))
}
import axios , {} from "../api/axios"
import { AxiosResponse } from "axios"
import {getToken} from '../storage/localStorage'
const postUrl:string = "/posts"

const setHeader = () : Object=>{
    const token = getToken("token")
    return {
    headers: { "x-auth-token": token }
}
}

export const getPosts = (roomID:string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(postUrl+"/rooms/"+roomID , setHeader())
}

export const getPost = (postID:string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(postUrl+"/"+postID  , setHeader())
}



export const savePost = (body:FormData):Promise<AxiosResponse<any, any>>=>{
      
    return axios.post(postUrl , body , setHeader())
}

export const getPostsOfUser = (UserID : string):Promise<AxiosResponse<any, any>>=>{
      
    return axios.get(postUrl+"/users/"+UserID , setHeader())
}
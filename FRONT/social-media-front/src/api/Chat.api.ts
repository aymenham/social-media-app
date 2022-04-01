import axios , {} from "../api/axios"
import { AxiosResponse } from "axios"
import {getToken} from '../storage/localStorage'
const chatUrl ="/chat/"

const setHeader = () : Object=>{
    const token = getToken("token")
    return {
    headers: { "x-auth-token": token }
}
}

export const  getAllMessagesRoom = (roomID:string)=>{

    return axios.get(chatUrl+roomID)
}
import { decodeJwt } from "../Utils/jwt"

export const  storeToken = (key : string , value:string)=>{

    localStorage.setItem(key , value)
}

export const getToken = (key : string):string=>{

    return localStorage.getItem(key)
}

export const deleteToken = ():void=>{

     localStorage.clear()
}


export const getTokenInfo  = ()=>{

    const data = decodeJwt(getToken("token"))
    return data

}


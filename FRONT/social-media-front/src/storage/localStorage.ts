export const  storeToken = (key : string , value:string)=>{

    localStorage.setItem(key , value)
}


export const getToken = (key : string):string=>{

    return localStorage.getItem(key)
}
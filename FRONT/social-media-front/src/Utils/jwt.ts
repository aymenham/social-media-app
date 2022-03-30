import jwt_decode  from 'jwt-decode'
interface IToken {
    id : string,
    name :string , 
    rule : string
}
export const decodeJwt = (token:string):IToken=>{

    return jwt_decode (token)
}
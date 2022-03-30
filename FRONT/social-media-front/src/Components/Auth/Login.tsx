import { AxiosError } from 'axios';
import React, { ChangeEvent, useState } from 'react';
import {loginUser} from "../../api/User.api"
import {decodeJwt} from "../../Utils/jwt"
import {useNavigate} from 'react-router-dom'
import {storeToken} from '../../storage/localStorage'
interface ILogin{
    email :string ,
    password :string
} 
const Login = () => {

    const [errorMessage , setErrorMessage] = useState<string | null>(null)
    const [inputs  , setInputs] = useState<ILogin>({
        email :"",
        password :""
    })
    const navigate = useNavigate()
    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>)=>{

        setInputs({
            ...inputs ,
            [event.currentTarget.name] : event.currentTarget.value
        })

    }

    const onSubmit = async()=>{
        const LoginBody = {
            email : inputs.email.trim(),
            password : inputs.password.trim()
        }
        try {
            const result =  await loginUser(LoginBody)
            const token = result.data["token"]
            const decode_jwt = decodeJwt(token)
            const RULE= decode_jwt["rule"]
            storeToken("token" , token)
            if(RULE == "USER") {
                    console.log("user");
                    
            }
            else if (RULE == "ADMIN"){
                    navigate("/admin")
                    
            }
            
            
            
        } catch (error:any) {
            const errorBody:AxiosError = error.response.data
            setErrorMessage(errorBody.message)
            
        }
    }
    return (
        <div className='login-container'>
           <div>
            <p style={{display : errorMessage ? "block" :"none"}} className='error-message'>{errorMessage}]</p>
            <input className='input' name='email' type="text" placeholder='email' onChange={onChangeHandler}
            value={inputs.email} 
            />
           <input className='input' name='password' type="password" placeholder='password' onChange={onChangeHandler} 
           value={inputs.password}
           />
           <button onClick={onSubmit} className='submit-button'>Login</button>
           </div>
        </div>
    );
};

export default Login;
import React, { ChangeEvent, useCallback, useState } from 'react';
import axios, { AxiosError } from "axios" 
import {registerUser} from "../../api/User.api"

type inputsType = {
    file : File |null ,
    name : string ,
    email : string ,
    password : string

}
const Register = () => {
    const classOfMessageBlock:string[] = ["error-message"]
    const [sucess , setSucess] = useState<boolean>(false)
    const [message , setMessage] = useState<string | null>(null)
    const [inputs , setInpus] =useState<inputsType>({
            file :null,
            name :"",
            email :"",
            password :""
    })
    if(sucess) classOfMessageBlock.push("sucess-message")
    const inputHandlChange = (event: ChangeEvent<HTMLInputElement>)=>{
        
      
            if(event.target.name =="file" ){
               

                setInpus({
                    ...inputs , 
                    file :event.currentTarget.files[0]
                })
            } else {
                setInpus({
                ...inputs ,
                [event?.currentTarget.name as string] : event.currentTarget.value
            })
            }
          
    }
    
    const onSubmit = async ()=>{
       
            const  fromDataUser = new FormData()
               
                const User = {
                    name : inputs.name , 
                    email : inputs.email,
                    password : inputs.password,
                    avatar :"",
                    rule:"USER"
                }
              
                
                 fromDataUser.append("avatar" , inputs.file)
                 fromDataUser.append("body" , JSON.stringify(User))                
                try {
                   const result =  await registerUser(fromDataUser)
                  setSucess(true)
                  setMessage("sucess register")
                  setInpus({
                      name:"",
                      email:"",
                      password:"",
                      file :null
                  })
                   
                } catch (error : any) {
                   const errorObject:AxiosError =error.response.data
                   setSucess(false)
                   setMessage(errorObject.message)
                    
                }
                

    }
    
    
    
    return (
        <div className='register-container'>
            <p style={{display : message ? "block" :"none"}} className={classOfMessageBlock.join(" ")}> {message}</p>
            <input className='input' onChange={inputHandlChange} type="file" name='file'/>
            <input className='input' onChange={inputHandlChange} type="text" name='name' placeholder='name ' value={inputs.name} />
            <input className='input' onChange={inputHandlChange} type="email" name='email' placeholder='email' value={inputs.email} />
            <input className='input' onChange={inputHandlChange} type="password" name='password' placeholder='password' value={inputs.password} />
            <button onClick={onSubmit} className='submit-button'>register</button>
        </div>
    );
};

export default Register;
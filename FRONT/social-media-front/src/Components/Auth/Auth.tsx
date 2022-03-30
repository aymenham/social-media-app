import React, { useContext, useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
    const [login , setLogin] = useState<boolean>(true)
    return (
        <div>
            <div className='auth-choice'>
                <div className=' choice login-choice' onClick={()=>setLogin(true)}>login</div>
                <div className='choice-sep'></div>
                <div className=' choice register-choice' onClick={()=>setLogin(false)}>register</div>
            </div>
            {login ? <Login /> : <Register />}
          
        </div>
    );
};

export default Auth;
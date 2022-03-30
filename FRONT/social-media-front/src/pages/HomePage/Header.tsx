import React, { useContext, useState } from 'react';
import Modal from '../../Components/Modal/Modal'
import Auth from '../../Components/Auth/Auth'
const Header = () => {
    
    const [isOpenModal , setOpenModal] =useState<boolean>(false)

    return (
    
        <header className='header-container'>
                  <Modal setOpenModal={setOpenModal} isOpenModal={isOpenModal} modalTitle='Login & Register' >
                        <Auth />
                </Modal>
                <div className="header-background"> 
                <h1 className="header-title big-title">best social media for developer</h1>
                <button onClick={()=>setOpenModal(true)}  className='main-btn'>Join us</button>
                </div>
                
            </header>
          
            
    );
};

export default Header;
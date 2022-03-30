import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import RoomSection from './RoomSection';
import Services from './Services';
import Footer from './Footer'
import Modal from '../../Components/Modal/Modal';
import Auth from '../../Components/Auth/Auth';
 
const HomePage = () => {
        

    const [isOpenModal , setOpenModal] = useState<boolean>(false)
    
    
    return (
        <div>
         
        <Header />
         <RoomSection /> 
         <Services />
         <Footer />
        </div>
    );
};

export default HomePage;
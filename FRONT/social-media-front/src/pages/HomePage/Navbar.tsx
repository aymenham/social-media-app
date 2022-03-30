import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faClose } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../Components/Logo/Logo';

const Navbar = () => {
    const [toggle ,setToggle] = useState(false)
   
    return (
        <div style={{background : toggle ? "#A64AC9" : "#FFFFFF"}} className='navbar-container'>
            
           <nav className='main-navbar'>
             <div><Logo darkMode={toggle}/> </div>
      
             <div> <FontAwesomeIcon
             style={{color : toggle ? "#FFFFFF" : "black"}}
             onClick={()=> setToggle(!toggle)} className='navbar-icon'
              icon={ toggle ?  faClose: faBars}/> 
              
              </div>
            </nav>
              <ul className={toggle ? "show-list " : "hide-list "}>
                 <li> <a href="">Lorem, ipsum.</a></li>
                 <li> <a href="">Lorem, ipsum.</a></li>
                 <li> <a href="">Lorem, ipsum.</a></li>
                 <li> <a href="">Lorem, ipsum.</a></li>
             </ul>
        </div>
    );
    
};

export default Navbar;
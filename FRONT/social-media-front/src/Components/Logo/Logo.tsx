import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCode } from '@fortawesome/free-solid-svg-icons'
  interface IProps {
      darkMode : Boolean
  }
const Logo = (props : IProps) => {
    const {darkMode} = props
    const className = ["logo"]
    if(darkMode) className.push("logo-white")
    return (
        <div className={className.join(" ")}>
                 <p>coding</p>
                <FontAwesomeIcon icon={faCode}/>  
        </div>
    );
};

export default Logo;
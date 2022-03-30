import React from 'react'

import {Link , useResolvedPath , useMatch , LinkProps} from 'react-router-dom'

const  CustomLink = ({ children, to, ...props }: LinkProps)=> {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    
      <Link
        style={{ color: match ? "#A64AC9" : "" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
  );
}

export default CustomLink
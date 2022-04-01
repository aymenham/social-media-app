import React from 'react';
import { icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import CustomLink from '../CustomLink/CustomLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {deleteToken} from "../../storage/localStorage"
type ItemNavigation = {
    title :string ,
    to : string,
    icon : IconProp
}

interface NavigationProps {
    data : ItemNavigation[]
}
const Navigation = ({data} : NavigationProps) :JSX.Element => {
    return (
        <nav className='navigation-container'>
            
            <ul>

                {data.map(item=>{

                   return (
                        <li className='navigation-item' key={item.to}>
                        <FontAwesomeIcon icon={item.icon} />
                        <CustomLink 
                        onClick={item.title=="out" ? ()=>{
                                deleteToken()
                        }  : ()=>{

                        }} 
                        to={item.to}>
                           
                                {item.title}  
                        </CustomLink>
                        </li>
                   )
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
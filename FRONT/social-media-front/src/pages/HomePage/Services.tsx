import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {faUser , faBlog , faCode} from "@fortawesome/free-solid-svg-icons"

interface ServiceProps  {
    name : string ,
    count :number ,
    pictur : IconProp 
}
const Services = () => {

    const data: ServiceProps[]= [
        {name:"users" ,count:90 ,pictur : faUser},
        {name:"blog" ,count:50 ,pictur : faBlog },
        {name:"programming" ,count:17 ,pictur : faCode}
    ]
  


    const ServiceItem = ({name , count , pictur} : ServiceProps):JSX.Element=>{
        const [countStat , setCount] = useState<number>(0)
            useEffect(()=>{

        setTimeout(()=>{
                setCount(countStat+1)
        } ,100)

    } , [countStat < count -1 ? countStat : null])
        return (
            <div className='service-item'>
                
                <FontAwesomeIcon icon={pictur} />
                <h4 className='service-title medium-title'> {name}</h4>
                <p>{countStat}</p>
            </div>
        )
    }
    return (
        <div className='service-container'>
            <h4 className='big-title'>Lorem ipsum dolor sit amet.</h4>
            <div className='service-item-container'>
                  {data.map(service=>{
               return <ServiceItem 
               key={service.name}
               name={service.name} 
               count={service.count} 
               pictur={service.pictur} />
           })}
            </div>
        </div>
    );
};

export default Services;
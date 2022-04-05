import React, { useEffect, useState } from 'react';
import { Link, useLocation, useResolvedPath } from 'react-router-dom';
import { getUser } from '../../api/User.api';

type PostProps = {
  id:string
  title  :string , 
  user : string , 
  date : string , 
  tags : string [] ,
  avatar : string
}

const PostCard = ({id , user , date , tags , title , avatar}:PostProps) => {


  const {pathname} = useLocation()
 


  const POSTS_URL_PICTUR ="http://localhost:7000/app/storage/pictures/posts/"

  const [userName , setUserName] = useState('')
  const getUserEffect = async ()=>{
      try {
        const result = await getUser(user)
        setUserName(result.data["name"])
      } catch (error) {
        console.log(error);
        
      }
  }

  useEffect(()=>{
     getUserEffect()
  } , [])
    return (
        <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{backgroundImage : `url(${POSTS_URL_PICTUR}${avatar})`}}></div>
          <ul className="details">
            <li className="author"><a href="#">{userName}</a></li>
            <li className="date">{date}</li>
            <li className="tags">
              <ul>
                {tags.map(tag=>{
                  return  <li><a href="#">{tag}</a></li>
                })}
                
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
          <p className="read-more">
            <Link to={pathname+"/"+id}>
            Read More
            </Link>
           
          </p>
        </div>
      </div>
    );
};

export default PostCard;
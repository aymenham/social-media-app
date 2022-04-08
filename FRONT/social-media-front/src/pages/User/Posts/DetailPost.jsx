import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../../../api/Post.api';
import { getUser } from '../../../api/User.api';
import ReactHtmlParser  from 'html-react-parser'
import { paste } from '@testing-library/user-event/dist/paste';
import { getRelation } from '../../../api/Relation.api';
const DetailPost = () => {

    const params = useParams()
    const [Post , setPost] = useState(null)
    const USER_URL_PICTUR = "http://localhost:7000/app/storage/pictures/users/"
    const POST_URL_PICTUR = "http://localhost:7000/app/storage/pictures/posts/"

    const getPostEffect = async ()=>{
        try {
            const postID = params["postID"]
           const resultPost =  await getPost(postID)
           const userID = resultPost.data["user"]
           const resultUSer = await getUser(userID)
           const Post = {
               ... resultPost.data , 
               user : resultUSer.data
           }

         
           setPost(Post)
      
          
        } catch (error) {
            
        }
    }

 

    useEffect(()=>{
     
        getPostEffect()
    } , [])
   

  
    return (
        <div>
          {Post ? <div className='blog-detail'> 
              
            <div className="blog-author-container">
              
            <div  className="avatar">
            <div  className="avatar-img">
                    <img src={USER_URL_PICTUR+Post.user["avatar"]} alt="#" />
            </div> 
          </div>

            <div>
            <p>  {Post.user["name"]} </p>
            <p> {Post.date.split("T")[0]}</p>
            </div>
            <button className='submit-button'> follow</button>
            </div>
              
             <div className="blog-info-container">
             <h1 className='big-title'>{Post.title}</h1>
              
              <div className='post-avatar-container'>
                  <img src={POST_URL_PICTUR+Post.avatar} alt="" />
              </div>
                
                <div>
                    {ReactHtmlParser(Post.body)}
                </div>
                <div className='tags-container'>
                        {Post.tags.map(tag=>{
                            return <p>{tag}</p>
                        })}
                </div> 
             </div>

              
               </div> 
          
         
          
          
          
          
          
          
          :
          <div> no data </div>}
        </div>
    );
};

export default DetailPost;
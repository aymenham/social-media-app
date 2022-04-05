import React, { useEffect, useState } from 'react';
import SearchInput from '../../../Components/SearchInput/SearchInput';
import {Link , useResolvedPath , useLocation, Outlet, useParams } from 'react-router-dom'
import BlogCard from '../../../Components/BlogCard/PostCard';
import PostCard from '../../../Components/BlogCard/PostCard';
import { getPosts } from '../../../api/Post.api';
interface Post {
    _id : string
    title  :string , 
    user : string , 
    date : string , 
    tags : string [] ,
    avatar : string
  }
const Posts = () => {

    const params = useParams()
    const [posts , setPosts] = useState<Post[]>([])

    const getAllPostEffect = async ()=>{

        try {
           const result=  await getPosts(params["id"])           
           setPosts(result.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
       
        getAllPostEffect()
    } , [])
   
    
    
    return (
        <div>
           
            <div className='posts-action'>
            <SearchInput />
            <select name="" id="">
                <option value=""> all posts</option>
                <option value=""> post of my followers</option>
            </select>
            </div>
            
            {posts.map(post=>{

                return <PostCard
                 title={post.title} 
                 user={post.user} 
                 date={post.date.split('T')[0]} 
                 tags={post.tags} 
                 avatar={post.avatar} 
                 id={post._id}
                 />
            })}

         
        </div>
    );
};

export default Posts;
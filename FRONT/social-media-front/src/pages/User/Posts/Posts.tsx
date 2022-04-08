import React, { useEffect, useState } from 'react';
import SearchInput from '../../../Components/SearchInput/SearchInput';
import {Link , useResolvedPath , useLocation, Outlet, useParams } from 'react-router-dom'
import BlogCard from '../../../Components/BlogCard/PostCard';
import PostCard from '../../../Components/BlogCard/PostCard';
import { getPosts } from '../../../api/Post.api';
import { getRelation } from '../../../api/Relation.api';
import { getTokenInfo } from '../../../storage/localStorage';
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
    const [postsFiltred , setPostsFiltred] = useState<Post[]>([])
    const [subscriptions , setSubscriptions] = useState<string []> ()
    const [filtred , setFiltred] = useState<boolean>(false)
    
    const getSubscriptions = async ()=>{

        try {
           const result =  await getRelation(getTokenInfo().id)
            const subscriptions = result.data["subscriptions"]
            setSubscriptions(subscriptions)
            
        } catch (error) {
            console.log(error);   
        }

    }
    const getAllPostEffect = async ()=>{

        try {
           const result=  await getPosts(params["id"])            
           setPosts(result.data)
            
        } catch (error) {
            
            
            console.log(error);
            
        }
    }
    useEffect(()=>{
       getSubscriptions()
        getAllPostEffect()
    } , [])
   
    const getAllPostOfSub = ()=>{

        const result =  []
        for (let index = 0; index < posts.length; index++) {
            const idUser = subscriptions[index];
            
            for (let index2 = 0; index2 < posts.length; index2++) {
                console.log("index" , index2);
                
                const user = posts[index2]["user"];
                console.log("ta3 post",user ,  posts[index2]["title"]);
                console.log("sub li 3andi" ,idUser);
                
                if(user == idUser){
                    result.push(posts[index2])
                }
            }
           
        }
        return result
    }
    
    const PostsMap = filtred ? postsFiltred : posts
    return (
        <div>
           
            <div className='posts-action'>
            <SearchInput />
            <select onChange={(event)=>{
                const action = event.currentTarget.value;
                switch(action){
                    case "posts" :setFiltred(false) 
                    break ;
                    case "subscriptions" :
                        setFiltred(true) 
                        const postsSub = getAllPostOfSub()
                        setPostsFiltred(postsSub)
                    break ;
                    default : break;
                }
                
            }} name="" id="">
                <option value="posts"> all posts</option>
                <option value="subscriptions"> post of my subscriptions</option>
            </select>
            </div>
            
            {
            
            PostsMap.map(post=>{

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
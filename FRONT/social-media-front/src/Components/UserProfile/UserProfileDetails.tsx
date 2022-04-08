import { profile } from 'console';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostsOfUser } from '../../api/Post.api';
import { FollowUser, getRelation, UnFollowUser } from '../../api/Relation.api';
import { getUser } from '../../api/User.api';
import { getTokenInfo } from '../../storage/localStorage';
import PostCard from '../BlogCard/PostCard';
const UserProfileDetails = () => {

    const params = useParams()
    const USER_URL_PICTUR = "http://localhost:7000/app/storage/pictures/users/"
    const profileID = params["profileID"]
    const  [user , setUser] = useState({
        avatar : "" , 
        name :""
    })
    const [relation , setRelations] = useState( {
        subscribers : [] , 
        subscriptions : []
    })
    const [posts , setPosts] = useState([])
    const [isFollow , setFollow] = useState(false)
    const getUserEffect = async ()=>{
        try {
                
            const result = await getUser(profileID)
            
            if(result.data!=null){
                 setUser(result.data)
            } 
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const getPostsEffect = async ()=>{
        try {
                
            const result = await getPostsOfUser(profileID)
            
            if(result.data!=null){
                 setPosts(result.data)
            } 
            
        } catch (error) {
            console.log(error);
            
        }
    }

    
    const getRelationEffect = async ()=>{
            try {
                
                const result = await getRelation(profileID)
                
                if(result.data!=null){
                        
                    const subscribers = result.data["subscribers"]
                   
                    
                    
                    for (let index = 0; index < subscribers.length; index++) { 
                        const element = subscribers[index];
    
                        if(element == getTokenInfo().id) setFollow(true)
                    }

                    setRelations(result.data)
                } 
                
            } catch (error) {
                console.log(error);
                
            }
    }

    useEffect(()=>{
        getUserEffect()
        getPostsEffect()
        getRelationEffect()
    } ,[])

    const FollowHandler = async ()=>{

        try {
            const userID = getTokenInfo().id
            await FollowUser(userID , profileID)
            setFollow(true)
            setRelations({
                ...relation , 
                subscribers : [...relation.subscribers , profileID]
            })
        } catch (error) {
            console.log(error);
            
        }
       
    }

    const UnFollowHandler = async()=>{

        try {
            const userID = getTokenInfo().id
            await UnFollowUser(userID , profileID)
            setFollow(false)
            const Newsubscribers = [...relation.subscribers]
            const indexOfDeletedPerson = Newsubscribers.indexOf((id:any)=>{
                return id == userID
            })
            Newsubscribers.splice(indexOfDeletedPerson , 1)
            setRelations({
                ...relation , 
                subscribers :Newsubscribers
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div>
        <header>

        <div className="profile-container">
    
            <div className="profile">
    
                <div className="profile-image">
    
                    <img src={USER_URL_PICTUR+user.avatar} alt=""/>
    
                </div>
    
                <div className="profile-user-settings">
    
                    <p className="profile-user-name">{user.name}</p>
    
                    {isFollow ? <button onClick={UnFollowHandler} className="unscribe-button">unsubscribe</button> : <button onClick={FollowHandler} className=" submit-button">Follow</button>}
    
                    
    
                </div>
    
                <div className="profile-stats">
    
                    <ul>
                        <li><span className="profile-stat-count">{posts.length}</span> posts</li>
                        <li><span className="profile-stat-count">{relation.subscribers.length}</span> followers</li>
                        <li><span className="profile-stat-count">{relation.subscriptions.length}</span> following</li>
                    </ul>
    
                </div>
    
                <div className="profile-bio">
    
                    <p><span className="profile-real-name">{user.name}</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit </p>
    
                </div>
    
            </div>
           
    
        </div>
       
    
       </header>
       <div className='posts-container'>

            {posts.length>0 && posts.map(post=>{

                return <PostCard id={post._id} title={post.title} user={post.user} date={post.date} tags={post.tags} avatar={post.avatar} />
            })}
       </div>
        </div>
    );
};

export default UserProfileDetails;
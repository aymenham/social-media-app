import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useParams } from 'react-router-dom';
import { getTokenInfo } from '../../../storage/localStorage';
import { savePost } from '../../../api/Post.api';

const AddPost = () => {


        const [title  , setTitle] = useState("") 
        const [avatar , setAvatar] = useState(null)
        const [tagText , setTagText] = useState("") 
        const [tags , setTags] = useState([])
        const [body , setBody] = useState('')

        const params = useParams()
        const user = getTokenInfo()
        const roomID = params['id']
        const userID = user.id
        const type = "POST"
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
      const   handleEditorChange = (e) => {
       
        setBody(e.target.getContent())
         
      }

      const submit = async ()=>{
        try {
          const post = {
            title: title,
            body: body,
            avatar: "",
            tags: tags,
            theme: roomID,
            user: userID,
            type: type,
            date: date,
          }
          const formData = new FormData()
          formData.append("avatar" , avatar)
          formData.append('body' , JSON.stringify(post))
          await savePost(formData)
          alert("post added")
        } catch (error) {
          console.log(error);
        }
      }
    return (

        <div className='add-post-container'>
            <input onChange={(event)=>{
                    setTitle(event.target.value)

            }} type="text" className='input' placeholder='post title' value={title} />
            <input onChange={(event)=>{

              setAvatar(event.target.files[0])
            }} type="file" className='input' placeholder='avatar here'  />
           <div className="tags-action">
           <input onChange={(event)=>{
              setTagText(event.target.value)
            }} type="text" name="" id="" className='input' value={tagText} placeholder="add you're tag" />
            <button className='submit-button' onClick={()=>{
              setTags([...tags , tagText])
              setTagText('')
            }}> add tag</button>
           </div>
            <div className='tags-container'>
                {tags.map((tag , index)=>{
                    return <p> {tag}
                    <span style={{cursor :"pointer"}} onClick={()=>{

                      const newArray = [...tags]
                      newArray.splice(index , 1)
                      setTags(newArray)

                    }}> &#x2715;</span></p>
                })}
            </div>

            <button className=' add-post-btn' onClick={submit}> add the post </button>
            
                    <Editor
             apiKey="9fhpmd1sipd1ga59t4soskyydo3hwhosgbz3sqf2it0vsk1q"
        
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            selector:"textarea",
            plugins: 'link image code codesample',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | codesample' ,
            
          }}
          onChange={handleEditorChange}
        />

        </div>
    );
};

export default AddPost;
import React, { useEffect, useState } from 'react';
import userImg from '../asserts/images/user.jpg'
import noImg from '../asserts/images/no-img.png'
import './Blogs.css'
const Blogs = ({onShowNews,onCreateBlog,editPost,isEditing}) => {
    const [showForm,setShowForm]=useState(false)
    const [image,setImage]=useState(null)
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [submitted,setSubmitted]=useState(false)
    const [titleValid,setTitleValid]=useState(true)
    const [contentValid,setContentValid]=useState(true)
    useEffect(()=>{
        if(isEditing && editPost){
            setImage(editPost.image)
            setTitle(editPost.title)
            setContent(editPost.content)
            setShowForm(true)
        }else{
            setImage(null)
            setTitle('')
            setContent('')
            setShowForm(false)
        }
    },[isEditing,editPost])
    const handleImageChange=(e)=>{
        if(e.target.files && e.target.files[0]){
            const reader=new FileReader()
            reader.onloadend=()=>{
                setImage(reader.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!title || !content){
            if(!title) setTitleValid(false)
            if(!content) setContentValid(false)
            return 
        }
        const newBlog={
            image:image||noImg,
            title,
            content,
        }
        onCreateBlog(newBlog)
        setImage(null)
        setTitle('')
        setContent('')
        setShowForm(false)
        setSubmitted(true)
        setTimeout(()=>{
            setSubmitted(false)
            onShowNews()
        },3000)
    }
    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
        if(e.target.value<=60){
            setTitle(e.target.value)
            setTitleValid(true)
        }
    }
    const handleContentChanges=(e)=>{
        setContent(e.target.value)
        setContentValid(true)
    }
  return (
    <div className='blogs'>
      <div className="blogs-left">
        <img src={userImg} alt="" />
      </div>
      <div className="blogs-right">
        {
            !showForm && !submitted && (
                <button className='post-btn' 
                    onClick={()=>setShowForm(true)}>Create New Post
                </button>
            )
        }
        {
            submitted && <p className='submission-msg'>Post Sunmitted!</p>
        }
        <div className={`blogs-right-form ${showForm ? 'visible':'hidden'}`}>
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="img-upload">
                    <label htmlFor="file-upload" className='file-upload'>
                        <i className='bx bx-upload'></i>Upload Image
                    </label>
                    <input type="file" id="file-upload" onChange={handleImageChange}/>
                </div>
                <input type="text" 
                className={`title-input ${!titleValid ? 'invalid':''}`} 
                placeholder='Add Title(
                Max 60 Characters)'
                value={title}
                onChange={handleTitleChange}/>
                <textarea className={`text-input ${!contentValid ? 'invalid':''}`} 
                placeholder='Add Text'
                value={content}
                onChange={handleContentChanges}></textarea>
                <button type='submit' className='submit-btn'>Submit Button</button>
            </form>
        </div>
        
        <button className='blogs-close-btn' onClick={onShowNews}>Back <i className='bx bx-chevron-right'></i></button>
      </div>
    </div>
  );
}

export default Blogs;

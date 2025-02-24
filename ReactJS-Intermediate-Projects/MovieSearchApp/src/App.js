
import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs';
import News from './components/News';

function App() {
  const [showNews, setShowNews] = useState(true)
  const [showBlogs, setShowBlogs] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const handleCreateBlogs = (newBlog, isEditing) => {
    setBlogs((prevBlog) => {
      const updatedBlog = isEditing ?
        prevBlog.map((blog) => (blog === selectedPost ? newBlog : blog)) :
        [...prevBlog, newBlog]
      return updatedBlog
    })
    setIsEditing(false)
    setSelectedPost(null)
  }
  const handleEditBlog = (blog) => {
    setSelectedPost(blog)
    setIsEditing(true)
    setShowNews(false)
    setShowBlogs(true)
  }
  const handleDeleteBlog=(blogToDelete)=>{
    setBlogs((prevBlogs)=>{
      const updatedBlogs=prevBlogs.filter((blog)=>blog!==blogToDelete)
      return updatedBlogs
    })
  }
  const handleShowNews = () => {
    setShowNews(true)
    setShowBlogs(false)
    setIsEditing(false)
    setSelectedPost(null)
  }
  const handleShowBlogs = () => {
    setShowBlogs(true)
    setShowNews(false)
  }
  return <>
    <div className="container">
      <div className="news-blog-app">
        {showNews && <News onShowBlogs={handleShowBlogs}
          blogs={blogs}
          onEditBlog={handleEditBlog}
          onDeleteBlog={handleDeleteBlog}></News>}
        {showBlogs && <Blogs onShowNews={handleShowNews}
          onCreateBlog={handleCreateBlogs}
          editPost={selectedPost}
          isEditing={isEditing}></Blogs>}
      </div>
    </div>
  </>
}

export default App;

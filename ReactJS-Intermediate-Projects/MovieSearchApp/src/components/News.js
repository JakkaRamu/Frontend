import React, { useEffect, useState } from 'react';
import Weather from './Weather';
import Calender from './Calender';
import './News.css'
import userImg from '../asserts/images/user.jpg';
import noImg from '../asserts/images/no-img.png';
import NewsModel from './NewsModel';
import Bookmark from './Bookmark';

import BoxModel from './BoxModel';

const News = ({onShowBlogs,blogs,onEditBlog,onDeleteBlog}) => {
  const [heading,setHeading]=useState(null)
  const [news,setNews]=useState([])
  const [selectedCategory,setSelectedCategory]=useState('general')
  const [searchInput,setSearchInput]=useState('')
  const [searchQuery,setSearchQuery]=useState('')
  const [showModel,setShowModel]=useState(false)
  const [selectedArticle,setSelectedArticle]=useState(null)
  const [bookmarks,setBookmarks]=useState([])
  const [showBookmarksModel,setShowBookmarksModel]=useState(false)
  const [selectedPost,setSelectedPost]=useState(null)
  const [showModelBox,setShowModelBox]=useState(false)

  const cat=['general','world','business','technology','entertainment','sports','science','health','nation']
  const fetchNews = async () => {
    try {
      let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=42ce71aee555a4d6e8d66035c790d3bf`;

      if (searchQuery !== "") {
        url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=42ce71aee555a4d6e8d66035c790d3bf`;
      }

      let res = await fetch(url);
      const data = await res.json();

      if (data.articles && data.articles.length > 0) {
        setHeading(data.articles[0]);
        setNews(data.articles.slice(1, 7));
        
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  console.log(news)
  useEffect(()=>{
    fetchNews()
  },[selectedCategory,searchQuery])
  const handleCategoryClick = (e, cat) => {
    e.preventDefault();
    setSelectedCategory(cat);
    setSearchQuery("");  
  };
  
  const handleSearch=(e)=>{
    e.preventDefault()
    setSearchQuery(searchInput)
    setSearchInput('')
  }

  const handleArticle=(article)=>{
    setSelectedArticle(article)
    setShowModel(true)
    
  }
  
  const handleBookmark=(article)=>{
    setBookmarks((prevBookmarks)=>{
      const updateBookmarks=prevBookmarks.find((bookmark)=>(
        bookmark.title===article.title
      ))?prevBookmarks.filter((bookmark)=>
        bookmark.title===article.titl):[...prevBookmarks,article]
        return updateBookmarks
    })
  }
  const handleBlogClick=(blog)=>{
    setSelectedPost(blog)
    setShowModelBox(true)
  }
  const closeBlogModel=()=>{
    setSelectedPost(null)
    setShowModelBox(false)
  }
  return <>
    <div className="news">
      <header className='news-header'>
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input type="text" placeholder='Search News...' value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}/>
            <button type="submit">
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user" onClick={onShowBlogs}>
            <img src={userImg} alt="User Image" />
            <p>May's Blog</p>
          </div>
          <nav className="categories">
            <h1 className='nav-heading'>Categories</h1>
            <nav className="nav-links">
              {
                cat.map((category)=>(
                  <a href="#" 
                    className="nav-link" 
                    key={category}
                    onClick={(e)=>handleCategoryClick(e,category)}
                    >{category}</a>
                ))
              }
              <a href="#" className="nav-link" onClick={()=>setShowBookmarksModel(true)}>Bookmarks <i className='fa-solid fa-bookmark'></i></a>
            </nav>
          </nav>
        </div>
        <div className="news-section">
          {heading && (<div className="headline"
            onClick={()=>handleArticle(heading)}>
            <img src={heading.image} alt={noImg}/>
            <h2 className='headline-title'>{heading.title}
            <i className={`${
                    bookmarks.some((bookmark)=>
                      bookmark.title===heading.title)?'fa-solid':'fa-regular'
                  } fa-bookmark bookmark`} onClick={(e)=>{
                    e.stopPropagation()
                    handleBookmark(heading)}}></i>
            </h2>
          </div>)}
          <div className="news-grid">
            {news.map((articles,index)=>(
              <div key={index} className="news-grid-item"
              onClick={()=>handleArticle(articles)}>
                <img src={articles.image} alt={noImg} />
                <h3>{articles.title.length>15?`${articles.title.slice(0,25)}...`:articles.title}
                  <i className={`${
                    bookmarks.some((bookmark)=>
                      bookmark.title===articles.title)?'fa-solid':'fa-regular'
                  } fa-bookmark bookmark`} onClick={(e)=>{
                    e.stopPropagation()
                    handleBookmark(articles)}}></i>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <NewsModel show={showModel} 
                  article={selectedArticle}
                  onClose={()=>setShowModel(false)}></NewsModel>
          <Bookmark show={showBookmarksModel}
            bookmarks={bookmarks}
            onClose={()=>setShowBookmarksModel(false)}
            onSelectArticle={handleArticle}
            onDeleteBookmark={handleBookmark}
            ></Bookmark>
        <div className="my-blogs">
            <h1 className="my-blog-heading">My Blogs</h1>
            <div className="blog-posts">
              {
                blogs.map((blog,index)=>(
                  <div key={index} className='blog-post' onClick={()=>handleBlogClick(blog)}>
                    <img src={blog.image || noImg} alt={blog.title} />
                    <h3>{blog.title}</h3>
                    {/* <p>{blog.content}</p> */}
                    <div className="post-buttons">
                      <button className="edit-button" onClick={()=>onEditBlog(blog)}>
                        <i className='bx bxs-edit'></i>
                      </button>
                      <button className="delete-button" onClick={(e)=>
                        {
                          e.stopPropagation()
                          onDeleteBlog(blog)
                        }}>
                        <i className='bx bxs-x-circle'></i>
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
            {
              selectedPost && showModelBox &&(
                <BoxModel show={showModelBox}
                          blog={selectedPost}
                          onClose={closeBlogModel}></BoxModel>
              )
            }
            
        </div>
        <div className="weather-calender">
          <Weather></Weather>
          <Calender></Calender>
        </div>
      </div>
      <footer className='news-footer'>
        <p>
          <span>News & Blogs App</span>
        </p>
        <p>&copy; All Rights Reserved by Ram</p>
      </footer>
    </div>
  </>
  
}

export default News;

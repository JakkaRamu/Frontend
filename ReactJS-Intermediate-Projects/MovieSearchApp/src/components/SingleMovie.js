import React, { useContext ,useEffect,useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { url } from './context';

const SingleMovie = () => {
    const {id}=useParams()

    
      const [movies,setMovies]=useState("")
      const [isLoading,setIsLoading]=useState(true)
     
      const getMovies=async(url)=>{
          try{
              const res =await fetch(url)
              const data=await res.json()
              console.log(data)
              if(data.Response==="True"){
                  setMovies(data)
                  setIsLoading(false)
              }
              
          }
          catch(e){
            console.log(e)
          }
      }
      useEffect(()=>{
        var timeOut=setTimeout(()=>{
          getMovies(`${url}&i=${id}`)
        },800)
        return ()=>clearTimeout(timeOut)
      },[id])
     if(isLoading){
        return(
            <div className="movie-section">
                <div className="loading">
                    Loading...
                </div>
            </div>
        )
     }
    return <>
        <section className='movie-section'>
            <div className="movie-card">
                <figure>
                    <img src={movies.Poster} alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{movies.Title}</p>
                    <p className=''></p>
                    <p className="card-text">{movies.Released}</p>
                    <p className="card-text">{movies.Genre}</p>
                    <p className="card-text">{movies.imdbRating}</p>
                    <p className="card-text">{movies.Country}</p>
                    <NavLink to='/' className='back-btn'>
                        Go Back
                    </NavLink>
                </div>
            </div>

        </section>
    </>
}

export default SingleMovie;

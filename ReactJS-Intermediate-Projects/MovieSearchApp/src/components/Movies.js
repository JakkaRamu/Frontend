import React, { useContext } from 'react';
import { AppContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movies,isLoading}=useContext(AppContext)
  if(isLoading){
    return(
        <div className="">
            <div className="loading">
                Loading...
            </div>
        </div>
    )
 }
  return (
    <section className='movie-page'>
      <div className="container grid grid-4-col">
        {
          movies.map((curMovie)=>{
            const {imdbID,Poster,Title}=curMovie
            
            return(
              <NavLink to={`movies/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{Title}</h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            )
          })
        }
      </div>
    </section>
  )
}

export default Movies;

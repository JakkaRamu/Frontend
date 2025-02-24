import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
const MovieSearch=()=>{
    const [movie,setMovie]=useState('')
    const [sortBy,setSortBy]=useState('popularity.asc')
    const [selectedGenre,setSelectedGenre]=useState('')
    const handleInput=(e)=>{
        setMovie(e.target.value)
    }
    const handleSortChange=(e)=>{
        setSortBy(e.target.value)
    }
    const handleSelectedGenre=(e)=>{
        setSelectedGenre(e.target.value)
    }
    return <>
        <div>
            <h1>MovieHouse</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search Movies..." className="search-input" value={movie} onChange={handleInput}/>
                <button className="search-btn" onClick=''><AiOutlineSearch /></button>
            </div>
            <div className="filter">
                <label htmlFor="sort-by">Sort By:</label>
                <select id="sort-by" value={sortBy} onChange={handleSortChange}>
                    <option value="popularity.des">Popularity Descending</option>
                    <option value="popularity.asc">Popularity Ascending</option>
                    <option value="vote_average.des">Rating Descending</option>
                    <option value="vote_average.asc">Rating Ascending</option>
                    <option value="release_data_des">Release Data Descending</option>
                    <option value="release_data_asc">Release Data Ascending</option>
                </select>  
                <label htmlFor="genre">Genre:</label>
                <select id="genre" value={selectedGenre} onChange={handleSelectedGenre}>
                    <option value="">All Genres</option>
                    {

                    }
                </select> 
            </div>
        </div>
    </>
}
export default MovieSearch;
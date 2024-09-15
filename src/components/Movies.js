import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api_key="99eb9fd1"
const url=`https://www.omdbapi.com/?apikey=${Api_key}&s=`;

const Movies = () => {
  const [query, setQuery]= useState('hello');
  const [movies, setMovies]= useState([]);
  const [error, setError]= useState('');
  const [display,setDisplay]= useState(false)

  const handleSearch= (e)=>{
    e.preventDefault();
    if(!query){
      return;
    }
    try {
      axios.get(`${url}${query}`)
      .then(data=>{
        console.log(data.data)
        if(data.data.Response === 'False'){
          setError("Invalid movie name. Please try again.");
        }
        else{
         setMovies(data.data.Search);
         setError("");

       }
      setDisplay(true);

      })

    } catch (error) {
      console.log(error)
    }
  }
 
  // handleSearch()
  console.log("movies",movies)
  return (
    <div className='movie-search'>
     <form onSubmit={handleSearch}>
        <input
          type='text'
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder='Search for a movie...'
          />
        <button type='submit'>Search</button>
     </form>
       {display && <ul className='movie-results'>

{error && <li className='error'>{error}</li>}


{ error === '' && movies.map((movie)=>{
  return <li key={movie.imdbID} className='movie-card'>
   
  <h3>{movie.Title} ({movie.Year})</h3>
  <img src={movie.Poster} alt={movie.Title}/>
 
 </li>
})}


</ul>}
    </div>
  )
}

export default Movies
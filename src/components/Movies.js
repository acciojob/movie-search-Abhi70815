import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api_key="99eb9fd1"
const url=`https://www.omdbapi.com/?apikey=${Api_key}&t=`;

const Movies = () => {
  const [query, setQuery]= useState('hello');
  const [movies, setMovies]= useState([]);
  const [error, setError]= useState('');

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
          setError(data.data);
        }
        else{
         setMovies(data.data);
         setError("");

       }
        

      })

    } catch (error) {
      console.log(error)
    }
  }
 
  // handleSearch()
  console.log("movies",movies.length)
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
     {error && <p className='error'>{error.Error}</p>}
       <ul className='movie-results'>

         
          
          { error === '' && <li key={movies.imdbID} className='movie-card'>
              <h3>{movies.Title} {movies.Year}</h3>
              <img src={movies.Poster} alt={movies.Title}/>
            </li>}
          
         
       </ul>
    </div>
  )
}

export default Movies
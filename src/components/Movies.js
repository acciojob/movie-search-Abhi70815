import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Movies = ({ title }) => {
  const [MovieData, setMovieData] = useState([]);
console.log(title)
  

  useEffect(() => {
    const fetchData = () => {
      console.log("call")
      const link=`https://www.omdbapi.com/?apikey=99eb9fd1&t=${title}`
      const res = axios.get(link)
      .then((data)=>{
        console.log(data.data)
        setMovieData(data.data);
      })
     
      // https://www.omdbapi.com/?apikey=99eb9fd1&t=hitman
      
    
    };
    fetchData();
  },[title]);

  return (
    <ul>
    
        <li key={MovieData.Title}>{MovieData.Title}</li>
         <img src={MovieData.Poster}/>
    </ul>
  );
};

export default Movies;
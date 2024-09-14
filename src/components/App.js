
import React, { useState } from "react";
import './../styles/App.css';
import Movies from "./Movies";

const App = () => {
  const [input,setInput]=useState('');
  const [display,setDisplay]= useState(false);
  const handleSearch=()=>{
     setDisplay(true);
     
  }
  return (
    <div>
      <h2>Search Movie</h2>
      <input type="text"value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
       { display && <Movies title={input}/>}
    </div>
  )
}

export default App

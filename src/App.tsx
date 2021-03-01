import { useQuery } from '@apollo/client';
import React, {Component, useEffect, useState} from 'react';
import './App.css';
import { CharGet } from './character'


function App() {
  const {data,loading, error} = useQuery(CharGet);
  const [characters , setCharacters] = useState([]);

  useEffect(()=>{
    if(!loading){
      setCharacters(data.characters)
    }

  },[data])
  
  return (    
    
      <div className="App">
        <form>
          <input type="text"/>

        </form>  
        <div className="Characters">
          {characters.map( (character : any) => 
          <div className="character">
            <img src={character.results.image} alt={character.results.name}/>
          </div>
          )}
        </div>
      </div>
  );
}

export default App;

import { useQuery } from '@apollo/client';
import React, {Component, useEffect, useState} from 'react';
import './App.css';
import { CharGet } from './character'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache
});

function App() {
  const {data,loading, error} = useQuery(CharGet);
  const [characters , setCharacters] = useState([]);

  useEffect(()=>{
    if(!loading){
      setCharacters(data.characters)
    }

  },[data])
  
  return (    
    <ApolloProvider client={client}>
      <div className="App">
        <form>
          <input type="text"/>

        </form>  
        <div className="Characters">
          {characters.map( character => 
          <div className="character">
            <img src={character.results.image} alt={character.results.name}/>
          </div>
          )}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

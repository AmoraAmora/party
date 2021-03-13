import { useQuery } from '@apollo/client';
import React, {Component, useEffect, useState} from 'react';
import './App.css';
import { CharGet } from './character'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { stringify } from 'querystring';
import { Interface } from 'readline';
import { type } from 'os';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache
});

function App() {
  const {data,loading, error} = useQuery(CharGet);
  const [characters , setCharacters] = useState<Characters[]>([]);

  useEffect(()=>{
    if(!loading){
      setCharacters(data.characters)
    }

  },[data])

  /*interface Characters {
    character:{
      results: Array<{name:string;image:string}>
    };
    results: Array<{name:string;image:string}>;
    name:string;
    image:string;
  };*/
  
  type Characters = {
    name:string;
    image:string;
    results: Characters;
  }

  
  return (    
    <ApolloProvider client={client}>
      <div className="App">
        <form>
          <input type="text"/>

        </form>  
        <div className="Characters">
          {characters.map( character => 
            {<div className="Character">
               <img src={character.results.image} alt={character.results.name}/>
            </div>}
          )}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
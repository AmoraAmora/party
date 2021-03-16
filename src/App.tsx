
import React, {Component, useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { CHAR_GET } from './character'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache
});

function App() {
  
  interface Character {
    results: {
      name:string;
      image:string;
    }
  }

  interface Characters {
    characters: Character[];
  }

  interface CharactersVars {
    page: number;
  } 

  const { loading, data } = useQuery<Characters, CharactersVars>(
    CHAR_GET,
    { variables: { page: 1 } }
  );
  
  const characters:Character[] = data?.characters||[];

  
  return (    
    <ApolloProvider client={client}>
      <div className="App">
        <form>
          <input type="text"/>
        </form>  
             
        <div className="Characters">
          {characters.map( character => {
            return (<div className="Character">
               <img src={character.results.image} alt={character.results.name}/>
            </div>)}
          )}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
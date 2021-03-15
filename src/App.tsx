
import React, {Component, useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { CharGet } from './character'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache
});

function App() {
  
  interface Characters {
    name:string;
    image:string;
    results: Characters;
  }

  interface CharactersData {
    characters: Characters[];
  }

  interface CharactersVars {
    page: number;
  }

  const { loading, data } = useQuery<CharactersData, CharactersVars>(
    CharGet,
    { variables: { page: 1 } }
  );
  
  //const characters:Characters[] = data?.characters||[];

  
  return (    
    <ApolloProvider client={client}>
      <div className="App">
        <form>
          <input type="text"/>

        </form>  
      
        <div className="Characters">
          {data&&data.characters.map( character => {
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
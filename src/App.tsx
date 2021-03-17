
import React from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { CHAR_GET } from './character'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import {  CharactersData, CharactersVars } from './TODO/interfaces';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {

  const { loading, data } = useQuery<CharactersData, CharactersVars>(
    CHAR_GET,
    { variables: { page: 1 } }
  );
  
  //const characters : CharactersData[] = data?.characters||[];

  
  
  return (    
    <ApolloProvider client={client}>
      <div className="App">
        <form>
          <input type="text"/>
        </form> 
             

        <div className="Characters">
          {data&&data.characters.results.map( result => (
          <div className="Character">
               <img src={result.image} alt={result.name} />
          </div>)
          )}
          
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { CHAR_GET } from './character'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Characters, Character, CharactersVars } from './TODO/interfaces';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {

  const { loading, data } = useQuery<Characters, CharactersVars>(
    CHAR_GET,
    { variables: { page: 1 } }
  );
  
  const characters:Character[] = data?.results||[];

  
  return (    
    <ApolloProvider client={client}>
      <div className="App">
        <form>
          <input type="text"/>
        </form>  
             
        <div className="Characters">
          {characters.map( character => (
          <div className="Character">
               <img src={character.image} alt={character.name}/>
          </div>)
          )}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

import React,{useState} from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { CHAR_GET } from './character'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import {  CharactersData, CharactersVars } from './COMPONENTS/interfaces';
import TodoForm from './COMPONENTS/TodoForm';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [todos, setTodos] = useState([])

  const { loading, data } = useQuery<CharactersData, CharactersVars>(
    CHAR_GET,
    { variables: { page: 1 } }
  );

  const addHandler = (title:string) =>{
    console.log('add new', title);
    var char = data&&data.characters.results.find(item => item.name == title);
    console.log(char!.image)
    //return (<div className="Character">
    //           <img src={char!.image} />
    //</div>);

  }

  return (    
    <ApolloProvider client={client}>
      <div className="App">
        <TodoForm onAdd={addHandler}/>
             

        <div className="Characters">
          {data&&data.characters.results.map( result => (
          <div className="Character">
               <img src={result.image} alt={result.name
              } />
          </div>)
          )}
          
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
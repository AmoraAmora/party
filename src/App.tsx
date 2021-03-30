
import React,{useState} from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { CHAR_GET } from './character'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import {  CharactersData, CharactersVars, chars } from './COMPONENTS/interfaces';
import TodoForm from './COMPONENTS/TodoForm';
import { resultKeyNameFromField } from '@apollo/client/utilities';



const App: React.FC = () => {
  const [todos, setTodos] = useState([])

  const { loading, data } = useQuery<CharactersData, CharactersVars>(
    CHAR_GET,
    { variables: { page: 1 } }
  );
  
  let chars = data! && data.characters.results.map<chars>(result =>(
    {
      jsx: <div className="Character">
        <img src={result.image} alt={result.name} />
        <button />
      </div>,
      name: result.name,
    }
    ))

  /*{data&&data.characters.results.map( result => (
      <div className="Character">
           <img src={result.image} alt={result.name
          } />
      </div>)
    )}
    
    
        {chars!.map(char=> char.jsx)}*/

  const addHandler = (title:string) =>{
    console.log('add new', title);
    var char = chars!.find(item => item.name.indexOf(title) != -1);
    console.log(char!.jsx)

  }

  return (    
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
  );
}

export default App;

import React,{useState} from 'react';
import './App.css';
import FormComponent from '../Components/FormComponent';
import  CharacterList from '../Components/CharacterList';



const App: React.FC = () => {
  const [todos, setTodos] = useState([])

  return (    
      <div className="App">
        <FormComponent/>
        <CharacterList/>
      </div>
  );
}

export default App;
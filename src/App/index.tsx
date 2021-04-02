
import React,{useState} from 'react';
import './style.css';
import  CharacterList from '../Components/CharacterList/function';
import FormComponent from '../Components/Form/FormComponent';



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
import React from 'react'
import './style.css'
import CharacterList from '../Components/CharacterList'
import FormComponent from '../Components/Form'
import RickAndMorty from '../Components/RickAndMorty'
import { TitleProvider } from '../context'

function App() {
  return (
      <TitleProvider>
          <div className="App">
              <FormComponent />
              <CharacterList />
              <RickAndMorty />
          </div>
      </TitleProvider>
  )
}

export default App

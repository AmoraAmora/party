import React from 'react'
import 'fontsource-roboto'
import './style.css'
import CharacterList from '../Components/CharacterList'
import FormComponent from '../Components/Form'
import RickAndMorty from '../Components/RickAndMorty'
import { TitleProvider } from '../Components/TitleProvider'
import { RickAndMortyProvider } from '../Components/RickAndMortyProvider'

function App() {
  return (
      <RickAndMortyProvider>
          <TitleProvider>
              <div className="App">
                  <FormComponent />
                  <CharacterList />
                  <RickAndMorty />
              </div>
          </TitleProvider>
      </RickAndMortyProvider>
  )
}

export default App

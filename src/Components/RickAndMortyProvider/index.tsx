import React, {
  createContext, ReactNode, useContext, useState,
} from 'react'
import { Context } from './interfaces'

const defaultValue = {
  Rick: '',
  Morty: '',
  onChangePicture: () => null,
}

const RickAndMortyContext = createContext<Context>(defaultValue)

export const useRickAndMorty = () => useContext(RickAndMortyContext)

export function RickAndMortyProvider({ children }:{ children: ReactNode }) {
  const [rick, setRick] = useState('')
  const [morty, setMorty] = useState('')

  const onChangePicture = (value: string) => {
    if (value === 'https://rickandmortyapi.com/api/character/avatar/1.jpeg') { setRick('url(https://rickandmortyapi.com/api/character/avatar/1.jpeg)') }
    if (value === 'https://rickandmortyapi.com/api/character/avatar/2.jpeg') { setMorty('url(https://rickandmortyapi.com/api/character/avatar/2.jpeg)') }
  }
  // {background: url(morty)}

  return (
      <RickAndMortyContext.Provider value={{
        Rick: rick,
        Morty: morty,
        onChangePicture,
      }}
      >
          {children}
      </RickAndMortyContext.Provider>
  )
}

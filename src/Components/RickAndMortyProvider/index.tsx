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
    if (value === 'Rick Sanchez') { setRick(value) }
    if (value === 'Morty Smith') { setMorty(value) }
  }

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

import React, {
  createContext, ReactNode, useContext, useState,
} from 'react'

import { debounce } from 'lodash'
import { Context } from './interfaces'

const defaultValue = {
  search: '',
  onChangeTitle: () => null,
}

const TitleContext = createContext<Context>(defaultValue)

export const useTitle = () => useContext(TitleContext)

export function TitleProvider({ children }:{ children: ReactNode }) {
  const [title, setTitle] = useState('')

  const onChangeTitle = debounce((value: string) => {
    setTitle(value)
  }, 1000)

  return (
      <TitleContext.Provider value={{
        search: title,
        onChangeTitle,
      }}
      >
          {children}
      </TitleContext.Provider>
  )
}

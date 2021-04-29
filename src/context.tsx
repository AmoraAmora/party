import React, {
  createContext, ReactNode, useContext, useState,
} from 'react'

interface Context {
  search:string;
  onChangeTitle(value:string):void
}

const TitleContext = createContext<Context>({} as Context)

export const useTitle = () => useContext(TitleContext)

export function TitleProvider({ children }:{ children: ReactNode }) {
  const [title, setTitle] = useState('')

  const onChangeTitle = (value: string) => {
    setTitle(value)
  }

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

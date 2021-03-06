import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { CharactersData, CharactersVars } from './Interfaces'
import CharacterItem from './CharacterItem'
import { CHAR_GET } from './Query'
import { useTitle } from '../TitleProvider'
import './style.css'

const CharacterList: React.FC = () => {
  const title = useTitle()

  const { data } = useQuery<CharactersData, CharactersVars>(CHAR_GET, {
    variables: { name: title.search },
  })
  const [delitedChars, setDelitedChars] = useState<number[]>([])

  const deleteChar = (id:number) => {
    if (!delitedChars.includes(id)) {
      const arr = delitedChars
      arr.push(id)
      arr.push(0)
      setDelitedChars(arr)
    }
  }

  if (title.search === '') return (null)

  return (
      <div className="Characters">
          {data?.characters.results
            .filter((char) => !delitedChars.includes(char.id))
            .map((character) => (
                <CharacterItem
                  onDelete={deleteChar}
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
            ))}
      </div>
  )
}
export default CharacterList

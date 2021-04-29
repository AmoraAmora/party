import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CharactersData, CharactersVars } from './Interfaces'
import CharacterItem from './CharacterItem'
import { CHAR_GET } from './Query'
import { useTitle } from '../../context'

const CharacterList: React.FC = () => {
  const title = useTitle()

  const { data } = useQuery<CharactersData, CharactersVars>(CHAR_GET, {
    variables: { page: 1 },
  })
  const [delitedChars, setDelitedChars] = useState<number[]>([])

  const deleteChar = (id:number) => {
    if (!delitedChars.includes(id)) {
      setDelitedChars((prevChars) => {
        prevChars.push(id)
        return prevChars
      })
    }
  }

  return (
      <div className="Characters">
          {data?.characters.results
            .filter(
              (char) => char.name.indexOf(title!.search, -1) !== 0
            && char.name.indexOf(title!.search) !== -1,
            )
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

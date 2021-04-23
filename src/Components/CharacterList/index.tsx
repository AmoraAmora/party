import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CharactersData, CharactersVars, ListProps } from './Interfaces'
import CharacterItem from './CharacterItem'
import { CHAR_GET } from './Query'

const CharacterList: React.FC<ListProps> = ({ title }) => {
  const { data } = useQuery<CharactersData, CharactersVars>(CHAR_GET, {
    variables: { page: 1 },
  })
  const [Chars, setChars] = useState<string[]>([])

  const deleteChar = (name:string) => {
    if (name !== 'Rick Sanchez' && name !== 'Morty Smith') {
      setChars((prevChars) => {
        prevChars.push(name)
        return prevChars
      })
    }
  }

  return (
      <div className="Characters">
          {data?.characters.results
            .filter(
              (char) => char.name.indexOf(title, -1) !== 0
            && char.name.indexOf(title) !== -1,
            )
            .filter((char) => !Chars.indexOf(char.name))
            .map((character) => (
                <CharacterItem
                  onDelet={deleteChar}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
            ))}
      </div>
  )
}
export default CharacterList

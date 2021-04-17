import React from 'react'
import { useQuery } from '@apollo/client'
import { CharactersData, CharactersVars, ListProps } from './Interfaces'
import CharacterItem from './CharacterItem'
import { CHAR_GET } from './Query'

const CharacterList: React.FC<ListProps> = ({ title }) => {
  const { data } = useQuery<CharactersData, CharactersVars>(CHAR_GET, {
    variables: { page: 1 },
  })

  return (
      <div className="Characters">
          {data?.characters.results
            .filter(
              (char) => char.name.indexOf(title, -1) !== 0
            && char.name.indexOf(title) !== -1,
            )
            .map((character) => (
                <CharacterItem
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
            ))}
      </div>
  )
}
export default CharacterList

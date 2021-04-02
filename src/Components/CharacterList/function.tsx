import React from 'react';
import { useQuery } from '@apollo/client'
import { CharactersData, CharactersVars } from './Interfaces';
import CharacterItem from './CharacterItem';
import { CHAR_GET } from './Query';

const CharacterList: React.FC = () => {
  const { data } = useQuery<CharactersData, CharactersVars>(
    CHAR_GET,
    { variables: { page: 1 } }
  );

  return (
    <div>
      {data?.characters.results.map(character => (
        <CharacterItem key={character.id}
         name={character.name} image={character.image}/>
      ))}
    </div>)
}
export default CharacterList
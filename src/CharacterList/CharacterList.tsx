import React from 'react';
import { useQuery } from '@apollo/client'
import { CHAR_GET } from './CharacterQuery'
import { Characters, CharactersData, CharactersVars, Chars } from './CharactersInterfaces';

function CharacterItem (props) {

  return <div className="Character">{props.value}</div>
}

const CharacterList: React.FC = ()=> { 
  const { data } = useQuery<CharactersData, CharactersVars>(
    CHAR_GET,
    { variables: { page: 1 } }
  );
  
  let chars = data?.characters.results.map<Chars>(result =>(
    {
      jsx: <div className="Character">
        <img src={result.image} alt={result.name} />
        <button />
      </div>,
      name: result.name,
    }
    ));
    return(
      <div>
      {data?.characters.results.map(character =>(
        <CharacterItem key={character.name} value={character}>
        <img src={character.image} alt={character.name} />
        <button />
        </CharacterItem>
      ))}
     </div>)
  }
export default CharacterList
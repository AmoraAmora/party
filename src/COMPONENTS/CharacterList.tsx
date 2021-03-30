import React from 'react';
import { useQuery } from '@apollo/client'
import { CHAR_GET } from './character'
import { CharactersData, CharactersVars, Chars } from './interfaces';
  
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
        <div className="Character">
        <img src={character.image} alt={character.name} />
        <button />
      </div>
      ))}
     </div>)
  }
export default CharacterList
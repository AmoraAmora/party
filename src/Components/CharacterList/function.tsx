import React from "react";
import { useQuery } from "@apollo/client";
import { CharactersData, CharactersVars } from "./Interfaces";
import CharacterItem from "./CharacterItem/CharacterItem";
import { CHAR_GET } from "./Query";

interface Props {
  title: string;
}

const CharacterList: React.FC<Props> = ({ title }) => {
  const { data } = useQuery<CharactersData, CharactersVars>(CHAR_GET, {
    variables: { page: 1 },
  });

  return (
    <div>
      {data?.characters.results
        .filter(function (char) {
          if (char.name.indexOf(title, -1) != 0 && char.name.indexOf(title) != -1)
            return char;
        })
        .map((character) => (
          <CharacterItem
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
    </div>
  );
};
export default CharacterList;

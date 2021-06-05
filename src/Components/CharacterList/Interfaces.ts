export type Character = {
  name: string;
  image: string;
  id: number;
}
export type Characters = {
  results: Character[];
}
export type CharactersData = {
  characters: Characters;
}
export interface CharactersVars {
  name: string;
}

export interface ListProps {
  title: string;
}

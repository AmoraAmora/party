export type Character = {
    name: string;
    image: string;
    id: number;
}
export type Characters = {
    results:Character[];
}
export type CharactersData = {
    characters:Characters;
}
export interface CharactersVars {
    page: number;
};

export interface Chars{
    jsx: JSX.Element
    name: string
  }[]
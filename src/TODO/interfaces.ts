export type Character = {
      name:string;
      image:string;
  }

export type Characters = {
    results: Character[];
  }

export interface CharactersVars {
    page: number;
  }
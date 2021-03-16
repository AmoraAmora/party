export interface Character {
    results: {
      name:string;
      image:string;
    }
  }

interface Characters {
    characters: Character[];
  }

interface CharactersVars {
    page: number;
  }
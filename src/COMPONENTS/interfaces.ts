type Character = {
    name: string;
    image: string;
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
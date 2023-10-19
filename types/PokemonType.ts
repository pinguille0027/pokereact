export type PokemonType = {
    pokedexNumber: number,
    name: string,
    spriteUrl: string,
    artUrl: string,
    typePrymary: string,
    typeSecondary: string | null,
    abilities:{
      name: string;
      is_hidden: boolean;
    }[],
    description: string,
    height: number,
    weight: number,
    stats:{
      name: string,
      base: number
    }[]
  }
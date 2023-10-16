import { PokemonType } from "../types/PokemonType";

type PokemonBasicType = {
  name: string;
  url: string;
};

export async function fetchPokemons(/*limit and offset */) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();

    const detailedPokemonData: PokemonType[] = await Promise.all(
      data.results.map(async (pokemon: PokemonBasicType) => {
        const response = await fetch(pokemon.url);
        const pokemonData = await response.json();
        return {
          pokedexNumber: pokemonData.id,
          name: pokemonData.name,
          spriteUrl: pokemonData.sprites.front_default,
          artUrl: pokemonData.sprites.other["official-artwork"].front_default,
          typePrymary: pokemonData.types[0].type.name,
          typeSecondary: pokemonData.types[1]?.type.name || null,
        };
      })
    );
    console.log(detailedPokemonData);

    sessionStorage.setItem("cachedData", JSON.stringify(detailedPokemonData));
    return detailedPokemonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
}

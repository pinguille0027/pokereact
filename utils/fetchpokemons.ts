import { PokemonType } from "../types/PokemonType";

type PokemonBasicType = {
  name: string;
  url: string;
};
type abilityType ={
  ability:{
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
export async function fetchPokemons(/*limit and offset */) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();

    const detailedPokemonData: PokemonType[] = await Promise.all(
      data.results.map(async (pokemon: PokemonBasicType) => {
        const responsedata = await fetch(pokemon.url);
        const pokemonData = await responsedata.json();
        const responsedescription = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`)
        const pokemonDescription = await responsedescription.json()
        const abilities = pokemonData.abilities.map((ability: abilityType) => ({
          name: ability.ability.name,
          is_hidden: ability.is_hidden
        }));
        function formatDescription(description: string): string {
          // Reemplazar las secuencias de escape con los caracteres correspondientes
          const formattedDescription = description.replace(/\n/g, ' ').replace(/\f/g, ' ').replace(/\t/g, ' ').replace(/POKéMON/g, "Pokemon");
        
          return formattedDescription;
        }
        const formattedDescription = formatDescription(pokemonDescription.flavor_text_entries[0].flavor_text);
        const height_meters = pokemonData.height / 10;
        const weight_kilograms = pokemonData.weight / 10;
        return {
          pokedexNumber: pokemonData.id,
          name: pokemonData.name,
          spriteUrl: pokemonData.sprites.front_default,
          artUrl: pokemonData.sprites.other["official-artwork"].front_default,
          typePrymary: pokemonData.types[0].type.name,
          typeSecondary: pokemonData.types[1]?.type.name || null,
          abilities: abilities,
          description: formattedDescription,
          height: height_meters,
          weight: weight_kilograms,
          stats: [
            {name: "HP", base: pokemonData.stats[0].base_stat},
            {name: "Attack", base: pokemonData.stats[1].base_stat},
            {name: "Defense", base: pokemonData.stats[2].base_stat},
            {name: "Special-Attack", base: pokemonData.stats[3].base_stat},
            {name: "Special-Defense", base: pokemonData.stats[4].base_stat},
            {name: "Speed", base: pokemonData.stats[5].base_stat}
          ]
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

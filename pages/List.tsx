import React, { useState, useEffect, ChangeEvent } from "react";
import SearchBar from "../components/atoms/SearchBar";
import {PokemonType} from "../types/PokemonType";
import PokemonCard from "../components/PokemonCard"
import styles from "../styles/list.module.css"

type PokemonBasicType = {
  name: string;
  url: string;
}


const List: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>("Pokedex Number");
  const [sortOrder, setSortOrder] = useState<string>("ASC");
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);


  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();

        const detailedPokemonData = await Promise.all(
          data.results.map(async (pokemon: PokemonBasicType) => {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();
            return {
              pokedexNumber: pokemonData.id,
              name: pokemonData.name,
              imageUrl: pokemonData.sprites.front_default,
              typePrymary: pokemonData.types[0].type.name,
              typeSecondary: pokemonData.types[1]?.type.name || null
            };
          })
        );
        console.log(detailedPokemonData)

        sessionStorage.setItem('cachedData', JSON.stringify(detailedPokemonData));
        setPokemons(detailedPokemonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Manejar el error, mostrar un mensaje al usuario, etc.
      }
    };

    const cachedData = sessionStorage.getItem('cachedData');
    if (cachedData) {
      setPokemons(JSON.parse(cachedData));
    } else {
      fetchDataFromAPI();
    }
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredItems = pokemons
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "Pokedex Number") {
        return sortOrder === "ASC"
          ? a.pokedexNumber - b.pokedexNumber
          : b.pokedexNumber - a.pokedexNumber;
      } else if (sortBy === "Name") {
        return sortOrder === "ASC"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return 0;
    });

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSortOrder(event.target.checked ? "DESC" : "ASC");
  };

  return (
    <main className={styles.main}>
      <SearchBar
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
        onOrderChange={handleOrderChange}
      />
      <ul>
        {filteredItems.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.pokedexNumber}/>
        ))}
      </ul>
    </main>
  );
};

export default List;

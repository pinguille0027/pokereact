import React, { useState, useEffect, ChangeEvent } from "react";
import SearchBar from "../components/atoms/SearchBar";

interface Pokemon {
  name: string;
  url: string;
}


const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();

        const detailedPokemonData = await Promise.all(
          data.results.slice(0, 151).map(async (pokemon: Pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();
            return {
              id: pokemonData.id,
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
  const filteredItems = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onChange={handleSearchChange} />
      <ul>
        {filteredItems.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

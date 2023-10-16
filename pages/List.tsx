import React, { useState, useEffect, ChangeEvent } from "react";
import SearchBar from "../components/atoms/SearchBar";
import { PokemonType } from "../types/PokemonType";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/list.module.css";
import { fetchPokemons } from "../utils/fetchpokemons";

const List: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Pokedex Number");
  const [sortOrder, setSortOrder] = useState<string>("ASC");
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = sessionStorage.getItem("cachedData");
      if (!cachedData) {
        try {
          const data = await fetchPokemons();
          if (data) {
            setPokemons(data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setPokemons(JSON.parse(cachedData));
      }
    };

    fetchData();
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
      <div>
        <SearchBar
          onSearchChange={handleSearchChange}
          onSortChange={handleSortChange}
          onOrderChange={handleOrderChange}
        />
      </div>
      <div className={styles.cardContainer}>
        {filteredItems.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.pokedexNumber} />
        ))}
      </div>
    </main>
  );
};

export default List;

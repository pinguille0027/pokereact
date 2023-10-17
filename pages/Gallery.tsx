import React, { useState, useEffect, ChangeEvent } from "react";
import { PokemonType } from "../types/PokemonType";
import GalleryCard from "../components/GalleryCard";
import styles from "../styles/gallery.module.css";
import { fetchPokemons } from "../utils/fetchpokemons";

const Gallery: React.FC = () => {
  /*const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Pokedex Number");
  const [sortOrder, setSortOrder] = useState<string>("ASC");*/
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

  /*const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredItems = pokemons
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSortOrder(event.target.checked ? "DESC" : "ASC");
  };*/

  return (
    <main className={styles.main}>
      <div>
      </div>
      <div className={styles.cardContainer}>
        {pokemons.map((pokemon) => (
          <GalleryCard pokemon={pokemon} key={pokemon.pokedexNumber} />
        ))}
      </div>
    </main>
  );
};

export default Gallery;
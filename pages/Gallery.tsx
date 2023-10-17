import React, { useState, useEffect, ChangeEvent } from "react";
import { PokemonType } from "../types/PokemonType";
import GalleryCard from "../components/GalleryCard";
import styles from "../styles/gallery.module.css";
import { fetchPokemons } from "../utils/fetchpokemons";
import SelectBar from "../components/SelectBar"

const Gallery: React.FC = () => {
  const [selectTerm, setSelectTerm] = useState<string>("");
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

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectTerm(event.target.checked ? event.target.value : "");
  };
  const filteredItems = pokemons
    .filter((pokemon) =>
      pokemon.typePrymary.toLowerCase().includes(selectTerm.toLowerCase()) ||
      (pokemon.typeSecondary && pokemon.typeSecondary.toLowerCase().includes(selectTerm.toLowerCase()))
    );

  return (
    <main className={styles.main}>
      <SelectBar onSelectChange={handleSelectChange}></SelectBar>
      <div className={styles.cardContainer}>
        {filteredItems.map((pokemon) => (
          <GalleryCard pokemon={pokemon} key={pokemon.pokedexNumber} />
        ))}
      </div>
    </main>
  );
};

export default Gallery;
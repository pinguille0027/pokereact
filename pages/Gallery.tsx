import React, { useState, useEffect, ChangeEvent } from "react";
import { PokemonType } from "../types/PokemonType";
import GalleryCard from "../components/GalleryCard";
import styles from "../styles/gallery.module.css";
import { fetchPokemons } from "../utils/fetchpokemons";
import SelectBar from "../components/SelectBar"

const Gallery: React.FC = () => {
  const [selectTerm, setSelectTerm] =  useState<string[]>([]);
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
    const term = event.target.value;
  setSelectTerm(prevTerms => {
    if (prevTerms.includes(term)) {
      // Si el término ya está en el array, quítalo
      return prevTerms.filter(t => t !== term);
    } else {
      // Si el término no está en el array, agrégalo
      return [...prevTerms, term];
    }
  });
  };
  
  const filteredItems = pokemons.filter(pokemon => {
    if (selectTerm.length === 0) {
      return true;
    }
    const primaryMatch = selectTerm.some(term => pokemon.typePrymary.toLowerCase().includes(term.toLowerCase()));
    const secondaryMatch = pokemon.typeSecondary && selectTerm.some(term => pokemon.typeSecondary?.toLowerCase().includes(term.toLowerCase()));
    return primaryMatch || secondaryMatch;
  });
  

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
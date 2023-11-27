import React from 'react';
import {PokemonType} from "../types/PokemonType"
import TypeCard from './atoms/TypeCard';
import styles from "/styles/components/GalleryCard.module.css";
import PokemonDetails from './atoms/DetailsButton';

type PokemonCardProps = {
    pokemon: PokemonType;
};

const GalleryCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.cardContainer}>
            <img src={pokemon.artUrl} alt="official artwork"  className={styles.img}/>
        <div className={styles.title}>
            <h3 className={styles.name}>{pokemon.name}</h3>
            <h4 className={styles.number}>{pokemon.pokedexNumber}</h4>
        </div>
        <div className={styles.typesContainer}>
          <TypeCard type={pokemon.typePrymary}/>
          {pokemon.typeSecondary && <TypeCard type={pokemon.typeSecondary}/>}
        </div>
        <div className={styles.buttonDetailsContainer}>
          <PokemonDetails pokemon={pokemon}/>
        </div>
    </div>
  );
};

export default GalleryCard;
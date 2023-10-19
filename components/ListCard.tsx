import React from 'react';
import {PokemonType} from "../types/PokemonType"
import TypeCard from './atoms/TypeCard';
import styles from "../styles/components/ListCard.module.css"
import PokemonDetails from './atoms/DetailsButton';
type PokemonCardProps = {
    pokemon: PokemonType;
};

const ListCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.cardContainer}>
            <img src={pokemon.spriteUrl} alt="default front sprite"  className={styles.img}/>
        <div className={styles.title}>
            <h3 className={styles.name}>{pokemon.name}</h3>
            <h4 className={styles.number}>{pokemon.pokedexNumber}</h4>
        </div>
        <div className={styles.typesContainer}>
          <TypeCard type={pokemon.typePrymary} variant='round'/>
          {pokemon.typeSecondary && <TypeCard type={pokemon.typeSecondary} variant='round'/>}
        </div>
        <div className={styles.buttonDetailsContainer}>
          <PokemonDetails/>
        </div>
    </div>
  );
};

export default ListCard;
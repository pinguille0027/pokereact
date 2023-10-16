import React from 'react';
import {PokemonType} from "../types/PokemonType"
import TypeCard from './atoms/TypeCard';
import styles from "../styles/components/PokemonCard.module.css"

type PokemonCardProps = {
    pokemon: PokemonType;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.cardContainer}>
            <img src={pokemon.spriteUrl} alt="default front sprite"  className={styles.img}/>
        <div className={styles.title}>
            <h3 className={styles.name}>{pokemon.name}</h3>
            <h4 className={styles.number}>{pokemon.pokedexNumber}</h4>
        </div>
        <div className={styles.typesContainer}>
          <TypeCard type={pokemon.typePrymary}/>
          {pokemon.typeSecondary && <TypeCard type={pokemon.typeSecondary}/>}
        </div>
    </div>
  );
};

export default PokemonCard;
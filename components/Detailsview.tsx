import React from 'react';
import {PokemonType} from "../types/PokemonType"
import TypeCard from './atoms/TypeCard';
import styles from "../styles/components/atoms/PokemonDetails.module.css";
import { useOverlay } from "../context/OverlayContext";

type PokemonCardProps = {
    pokemon: PokemonType;
};

const DetailsView: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { hideOverlay } = useOverlay();
  
  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
          <button>&lt;</button>
          <button>&gt;</button>
          <button onClick={hideOverlay} className={styles.closeButton}>
            x
          </button>
        </nav>
        <aside className={styles.aside}>
        <img src={pokemon.artUrl} alt="artwork" width="250" />
        </aside>
        <div className={styles.title}>
          <h3 className={styles.name}>{pokemon.name}</h3>
          <h4 className={styles.number}>{pokemon.pokedexNumber}</h4>
        </div>
        <div className={styles.measures}>
          <p><strong>height</strong> {pokemon.height}m</p>
          <p><strong>weight</strong> {pokemon.weight}kg</p>
        </div>
        <div className={styles.description}>
          <p>{pokemon.description}</p>
        </div>
        <div className={styles.abilities}>
          {pokemon.abilities.map((ability) => (
          <h4 key={ability.name}>{ability.name}</h4>
        ))}
        </div>
        <div className={styles.stats}>
        {pokemon.stats.map((stat) => (
          <label key={stat.name} className={styles.statBarContainer}><strong>{stat.name}</strong>
          <progress id="file" max="255" value={stat.base} className={styles.statBar}/>
          <em className={styles.statBase}>{stat.base}</em>
          </label>
        ))}
        </div>
        <div className={styles.types}>
        <TypeCard type={pokemon.typePrymary} />
          {pokemon.typeSecondary && <TypeCard type={pokemon.typeSecondary} />}
        </div>
      </div>
  );
};

export default DetailsView;
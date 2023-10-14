import React from 'react';
import {PokemonType} from "../types/PokemonType"
import TypeCard from './atoms/TypeCard';
type PokemonCardProps = {
    pokemon: PokemonType;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div>
        <div>
            <img src={pokemon.imageUrl} alt="default front sprite" width="150"/>
        </div>
        <div>
            <h3>{pokemon.name}</h3>
            <h4><em>{pokemon.pokedexNumber}</em></h4>
        </div>
        <div>
          <TypeCard type={pokemon.typePrymary}/>
          {pokemon.typeSecondary && <TypeCard type={pokemon.typeSecondary}/>}
        </div>
    </div>
  );
};

export default PokemonCard;
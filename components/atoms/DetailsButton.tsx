import React from "react";
import styles from "../../styles/components/atoms/PokemonDetails.module.css";
import { useOverlay } from "../../context/OverlayContext";
import { PokemonType } from "../../types/PokemonType";
import DetailsView from "../Detailsview"
type DetailsProps = {
  pokemon: PokemonType;
};
const DetailsButton: React.FC<DetailsProps> = ({ pokemon }) => {
  const { showOverlay} = useOverlay();
  const handleButtonClick = () => {
    showOverlay(
      <DetailsView pokemon={pokemon}/>
    );
  };

  return (
    <button onClick={handleButtonClick} className={styles.showButton}>
      <img src="/public/expand.svg" alt="Click for more Details" width="15" />
    </button>
  );
};
export default DetailsButton;

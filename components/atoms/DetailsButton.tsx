import React from "react";
//import styles from "../../styles/components/atoms/PokemonDetails.module.css";
import { useOverlay } from "../../context/OverlayContext";
const PokemonDetails: React.FC = () => {
  const { showOverlay, hideOverlay } = useOverlay();

  const handleButtonClick = () => {
    showOverlay(<div>Tu contenido aquí
      <button onClick={hideOverlay}>xxx</button>
    </div>);
  };

  return (
    <button onClick={handleButtonClick}>Mostrar Overlay</button>
  );
  }
export default PokemonDetails;

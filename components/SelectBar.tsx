import React, { ChangeEvent } from "react";
import styles from "../styles/components/SelectBar.module.css";
import TypeCard from "./atoms/TypeCard";
const options = [
  "bug", "dark", "dragon", "electric", "fire", "fairy", "fighting", "flying", "ghost",
  "grass", "ground", "ice", "normal", "poison", "rock", "steel", "water"
]
interface SearchBarProps {
  onSelectChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SelectBar: React.FC<SearchBarProps> = ({
  onSelectChange
}) => {
  return (
    <form className={styles.formContainer}>
      {options.map((item) =>(
        <div className={styles.checkContainer} key={item}>
        
        <input type="checkbox" value={item} onChange={onSelectChange} />
        <label className={styles.banner}><TypeCard type={item} variant="banner"/></label>
        </div>
      ))}
    </form>
  );
};

export default SelectBar;
import React, { ChangeEvent } from "react";
import styles from "../styles/components/SelectBar.module.css";

interface SearchBarProps {
  onSelectChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const options = [
  "bug", "dark", "dragon", "electric", "fire", "fairy", "fighting", "flying", "ghost",
  "grass", "ground", "ice", "normal", "poison", "steel", "water"
]
const SearchBar: React.FC<SearchBarProps> = ({
  onSelectChange,
}) => {
  return (
    <form className={styles.formContainer}>
      <label>all
        <input type="checkbox" value="" onChange={onSelectChange}/>
        </label>
      {options.map((item) =>(
        <label>{item}
        <input type="checkbox" value={item} onChange={onSelectChange}/>
        </label>
      ))}
    </form>
  );
};

export default SearchBar;
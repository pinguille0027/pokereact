import React, { ChangeEvent } from 'react';
import styles from "../../styles/components/atoms/SearchBar.module.css"

interface SearchBarProps {
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onOrderChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange, onSortChange, onOrderChange }) => {
  return (
    <form className={styles.formContainer}>
      <section className={styles.section}>
        <label>Search by Name</label>
        <input type="search" onChange={onSearchChange} className={styles.input}/>
      </section>
      <section className={styles.section}>
        <label>Sort by</label>
        <select name="sortBy" onChange={onSortChange} className={styles.select}>
          <option value="Pokedex Number">Pokedex Number</option>
          <option value="Name">Name</option>
        </select>
      </section>
      <section className={styles.section}>
        <label>Ordering</label>
        <input type="checkbox" onChange={onOrderChange} />
      </section>
    </form>
  );
};

export default SearchBar;


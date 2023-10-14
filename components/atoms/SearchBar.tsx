import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onOrderChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange, onSortChange, onOrderChange }) => {
  return (
    <form>
      <input type="search" onChange={onSearchChange} />
      <label>Sort by</label>
      <select name="sortBy" onChange={onSortChange}>
        <option value="Pokedex Number">Pokedex Number</option>
        <option value="Name">Name</option>
      </select>
      <label>Ordering</label>
      <input type="checkbox" onChange={onOrderChange} />
    </form>
  );
};

export default SearchBar;


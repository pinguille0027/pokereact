import React from 'react';

const SearchBar = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;

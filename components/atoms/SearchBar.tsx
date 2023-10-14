import React from 'react';
import { ChangeEvent } from 'react';


// SearchBar.tsx
const SearchBar: React.FC<{ onChange: (event: ChangeEvent<HTMLInputElement>) => void }> = ({ onChange }) => {
  return <input type="text" onChange={onChange} />;
};


export default SearchBar;

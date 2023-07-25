import React, { ChangeEvent, useState } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface BuscadorProps {
  
  pokemonSearch: (name: string) => void;
}

export default function Buscador({pokemonSearch}: BuscadorProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    pokemonSearch(event.target.value); // Call the pokemonSearch function to update the parent state
  };

  return<div className={styles.buscador}>
    <input 
      type="text"
      placeholder="Search Pokemon"
      value={searchValue}
      onChange={handleChange}
    />
    <CgSearch 
      size={20}
      color="#4C4D5E"/>
  </div>;
}

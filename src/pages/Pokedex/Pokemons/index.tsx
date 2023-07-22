import { useEffect, useCallback } from 'react';
import styles from './Itens.module.scss';
import axios from 'axios';
import Pokemon from './Pokemon';

interface PokemonSprites {
    front_default: string;
    // Other sprite URLs if needed
  }
  
interface Props {
  pokemons: Array<{ id: number; name: string; sprites:PokemonSprites }>;
  setPokemons: React.Dispatch<React.SetStateAction<Array<{ id: number; name: string; sprites:PokemonSprites }>>>;
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Pokemons({ pokemons, setPokemons }: Props) {
  const getPokemons = useCallback(() => {
    const idEnd = [];
    for (let i = 1; i < 50; i++) {
      idEnd.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(idEnd.map((endpoint) => axios.get(endpoint)))
      .then((responses) => {
        const pokemonsData = responses.map((response) => response.data);
        setPokemons(pokemonsData);
        console.log(pokemonsData)
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log("Pokemon not found");
        } else {
          console.log("Error fetching Pokemon data:", error);
        }
      });
  }, [setPokemons]);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className={styles.pokemons}>
      {pokemons.map((pokemon, key) => (
        <Pokemon key={key} 
                 name={capitalizeFirstLetter(pokemon.name)}
                 image={pokemon.sprites.front_default}/>
      ))}
    </div>
  );
}
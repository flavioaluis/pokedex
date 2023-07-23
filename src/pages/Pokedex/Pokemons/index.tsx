import { useEffect, useCallback } from 'react';
import styles from './Itens.module.scss';
import axios from 'axios';
import Pokemon from './Pokemon';


interface Type {
  type: {
    name: string;
  };
}
interface PokemonSprites {
    front_default: string;
  }
  
interface Props {
  pokemons: Array<{ id: number; name: string; sprites:PokemonSprites; height:number; weight:number; types:Type[] }>;
  setPokemons: React.Dispatch<React.SetStateAction<Array<{ id: number; name: string; sprites:PokemonSprites; height:number; weight:number; types: Type[] }>>>;
  busca: string;
  filtro: number | null;
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Pokemons({ pokemons, setPokemons, busca, filtro }: Props) {
  const getPokemons = useCallback(() => {
    const idEnd = [];
    for (let i = 1; i < 150; i++) {
      idEnd.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(idEnd.map((endpoint) => axios.get(endpoint)))
      .then((responses) => {
        const pokemonsData = responses.map((response) => response.data);
        setPokemons(pokemonsData);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log("Pokemon not found");
        } else {
          console.log("Error fetching Pokemon data:", error);
        }
      });
  }, [setPokemons]);

  const searchPokemons = useCallback(() => {
    if (busca.trim() === '') {
      getPokemons(); 
    } else {
      const searchedPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(busca.toLowerCase())
      );
      setPokemons(searchedPokemons);
    }
  }, [busca, pokemons, setPokemons, getPokemons]);

  ///////////////////////Error
  const filterPokemons = useCallback(() => {
    if (filtro === null) {
      getPokemons();
    } else {
      const filtroString = String(filtro).toLowerCase();
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name.toLowerCase() === filtroString)
      );
      setPokemons(filteredPokemons);
    }
  }, [filtro, pokemons, setPokemons, getPokemons]);
  

  useEffect(() => {
    filterPokemons();
  }, [filterPokemons]);
  //////////////////////Error

  useEffect(() => {
    searchPokemons();
  }, [searchPokemons]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);


  return (
    <div className={styles.pokemons}>
      {pokemons.map((pokemon, key) => (
        <Pokemon key={key} 
                 id={pokemon.id}
                 name={capitalizeFirstLetter(pokemon.name)}
                 image={pokemon.sprites.front_default}
                 height={pokemon.height}
                 weight={pokemon.weight}
                 types={pokemon.types}
                 />
                 
      ))}
      
    </div>
  );
}
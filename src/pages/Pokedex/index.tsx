import { useEffect, useState } from 'react';
import axios from 'axios';
import Theme from 'styles/Theme.module.scss';
import styles from './Pokedex.module.scss';
import Pokemon from './Pokemon';
import Buscador from './Buscador';

interface Type {
  type: {
    name: string;
  };
}
interface PokemonData {
  id: number;
  name: string;
  front_default:string;
  height:number;
  weight:number;
  types:string[];

  // Adicionar outras propriedades
}


export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [searchedPokemons, setSearchedPokemons] = useState<PokemonData[]>([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const iEnds = [];
    for (let i = 1; i < 20; i++) {
      iEnds.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(iEnds);
    axios
      .all(iEnds.map((iEnd) => axios.get(iEnd)))
      .then((results) => {
        const pokemonData = results.map((result) => ({
          id: result.data.id,
          name: result.data.name,
          front_default: result.data.sprites.front_default,
          height: result.data.height,
          weight: result.data.weight,
          types: result.data.types.map((type: Type) => type.type.name),
        }));

        setPokemons(pokemonData);
        setSearchedPokemons(pokemonData); // Original data
      })
      .catch((error) => console.log(error));
  };

  const pokemonSearch = (name: string) => {
    if (name === '') {
      setSearchedPokemons(pokemons); // Reset to the original 
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
      setSearchedPokemons(filteredPokemons);
    }
  };

  return (
    <section>
      <h3 className={Theme.title}> Procure o Pokemon</h3>
      <div className={styles.pokedex__search}>
        <Buscador pokemonSearch={pokemonSearch} />
      </div>
      {searchedPokemons.map((pokemon, key) => (
        <div className={styles.pokedex__pokemons} key={key}>
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.front_default}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types}
          />
        </div>
      ))}
    </section>
  );
}
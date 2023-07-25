import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Theme from 'styles/Theme.module.scss';
import styles from './Pokedex.module.scss';
import Pokemons from './Pokemons';
import Buscador from './Buscador';

interface Type {
  type: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
}

interface PokemonData {
  id: number;
  name: string;
  front_default: string;
  stats: number[];
  height: number;
  weight: number;
  types: string[];
}

type PokemonLinkProps = {
  to: {
    pathname: string;
    state: { pokemon: PokemonData };
  };
  className?: string;
  children: React.ReactNode;
};

const PokemonLink: React.FC<PokemonLinkProps> = ({ to, className, children }:PokemonLinkProps) => {
  return <Link to={to} className={className}>{children}</Link>;
};

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [searchedPokemons, setSearchedPokemons] = useState<PokemonData[]>([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const iEnds = [];
    for (let i = 1; i < 19; i++) {
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
          stats: result.data.stats.map((base_stat: Stat) => base_stat.base_stat),
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
      <div className={styles.pokedex__pokemons}>
        {searchedPokemons.map((pokemon, key) => (
          <div key={key}>
            <PokemonLink
              to={{
                pathname: `/pokemon/${pokemon.id}`,
                state: { pokemon },
              }}
              className={styles.link}
            >
              <Pokemons
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.front_default}
                height={pokemon.height}
                weight={pokemon.weight}
                types={pokemon.types}
              />
            </PokemonLink>

          </div>
        ))}
      </div>
    </section>
  );
}
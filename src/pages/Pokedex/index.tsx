import { useState } from 'react';
import Theme from 'styles/Theme.module.scss';
import styles from './Pokedex.module.scss';
import Buscador from './Buscador';
import Pokemons from './Pokemons';


interface Type {
  type: {
    name: string;
  };
}
interface PokemonSprites {
  front_default: string;
  // Other sprite URLs if needed
}

interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight:number;
  sprites: PokemonSprites;
  types: Type[];
}

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]); // Specify the initial state type
  const [busca, setBusca] = useState('');

  return (
    <section className={Theme.container}>
      <h3 className={Theme.title}> Procure o Pokemon</h3>
      <div className={styles.pokedex__search}>
        <Buscador busca={busca} setBusca={setBusca} />
      </div>
      <Pokemons busca={busca} pokemons={pokemons} setPokemons={setPokemons} />
    </section>
  );
}
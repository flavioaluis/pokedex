import { useState } from 'react';
import styles from './Pokedex.module.scss';
import Buscador from './Buscador';
import Filtros from './Filtros';
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
  const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <main>
      <header className={styles.header}></header>
      <section className={styles.pokedex}>
        <h3 className={styles.pokedex__title}> Procure o Pokemon</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.pokedex__filters}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>
        <Pokemons busca={busca} filtro={filtro} pokemons={pokemons} setPokemons={setPokemons} />
      </section>
    </main>
  );
}
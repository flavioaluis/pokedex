import { useState } from 'react';
import styles from './Pokedex.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Pokemons from './Pokemons';

interface PokemonSprites {
  front_default: string;
  // Other sprite URLs if needed
}

interface PokemonData {
  id: number;
  name: string;
  sprites: PokemonSprites
}

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]); // Specify the initial state type
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo width={250} height={100} />
      </nav>
      <header className={styles.header}></header>
      <section className={styles.pokedex}>
        <h3 className={styles.pokedex__title}> Procure o Pokemon</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.pokedex__filters}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Pokemons pokemons={pokemons} setPokemons={setPokemons} />
      </section>
    </main>
  );
}
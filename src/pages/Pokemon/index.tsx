import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import styles from './Pokemon.module.scss';
import StandardPage from 'components/StandardPage';

interface PokemonData {
  id: number;
  name: string;
  front_default: string;
  stats:number[];
  height: number;
  weight: number;
  types: string[];
  
}

export default function Pokemon() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { pokemon } = state as { pokemon: PokemonData };

  return (
    <Routes>
      <Route path='*' element={<StandardPage />}>
        <Route index element={
          <>
            <button className={styles.back} onClick={() => navigate(-1)}>
              {'< Voltar '}
            </button>
            <section className={styles.container}>
              <h1 className={styles.title}>{pokemon.name}</h1>
              <div className={styles.image}><img src={pokemon.front_default} alt={pokemon.name} /></div>
              <div className={styles.contain}>
                <div className={styles.stats}>
                  <div className={styles.status__hp}>HP: {pokemon.stats[0]}</div>
                  <div className={styles.status__attack}>Attack: {pokemon.stats[1]}</div>
                  <div className={styles.status__defense}>Defense {pokemon.stats[2]}</div>
                  <div className={styles.status__specialattack}>Special Attack {pokemon.stats[3]}</div>
                  <div className={styles.status__specialdefense}>Special Defense: {pokemon.stats[4]}</div>
                  <div className={styles.status__speed}>Speed: {pokemon.stats[5]}</div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.tags__height}>Height: {pokemon.height}</div>
                  <div className={styles.tags__weight}>Weight: {pokemon.weight}</div>
                  <div className={styles.tags__id}>ID: {pokemon.id}</div>
                </div>
              </div>
            </section>
          </>
        } />
      </Route>
    </Routes>
  );
}
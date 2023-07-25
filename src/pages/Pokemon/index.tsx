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
              <div className={styles.pokemonInfo}>
                <div className={styles.imageContainer}><img src={pokemon.front_default} alt={pokemon.name} /></div>
                <div className={styles.statsContainer}>
                  <h1 className={styles.title}>{pokemon.name}</h1>
                  <div className={styles.stats}>
                    <div className={styles.stat}> HP:
                      <div className={styles.statBar}>
                        <div
                          className={styles.statBarFill}
                          style={{ width: `${pokemon.stats[0]}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className={styles.stat}> Attack:
                      <div className={styles.statBar}>
                        <div
                          className={styles.statBarFill}
                          style={{ width: `${pokemon.stats[1]}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className={styles.stat}> Defense: 
                      <div className={styles.statBar}>
                        <div
                          className={styles.statBarFill}
                          style={{ width: `${pokemon.stats[2]}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className={styles.stat}> Special Attack: 
                      <div className={styles.statBar}>
                        <div
                          className={styles.statBarFill}
                          style={{ width: `${pokemon.stats[3]}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className={styles.stat}> Special Defense: 
                      <div className={styles.statBar}>
                        <div
                          className={styles.statBarFill}
                          style={{ width: `${pokemon.stats[4]}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className={styles.stat}> Speed: 
                      <div className={styles.statBar}>
                        <div
                          className={styles.statBarFill}
                          style={{ width: `${pokemon.stats[5]}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.typesContainer}>
                    <div className={styles.typesContainer__color}>{pokemon.types.join(', ')}</div>
                  </div>
                  <div className={styles.tags}>
                    <div className={styles.tagItem}>{pokemon.height}</div>
                    <div className={styles.tagItem}>{pokemon.weight}</div>
                    <div className={styles.tagItem}>ID: {pokemon.id}</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        }
        />
      </Route>
    </Routes>
  );
}
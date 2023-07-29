import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import classNames from 'classnames';
import { PokemonData } from 'Types/pokeData';
import Capitalize from 'Types/util';
import styles from './Pokemon.module.scss';
import StandardPage from 'components/StandardPage';
import NotFound from 'pages/NotFound';

export default function Pokemon() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { pokemon } = state as { pokemon: PokemonData };
  console.log(state);
  const pokeType = () => {
    const types = pokemon.types.map((type) => type.toLowerCase());

    if (types.length === 1) {
      return (
        <div
          className={classNames(styles[`typesContainer__type__${types[0]}`])}
        >
          {Capitalize(types[0])}
        </div>
      );
    } else if (types.length === 2) {
      return (
        <>
          <div
            className={classNames(styles[`typesContainer__type__${types[0]}`])}
          >
            {Capitalize(types[0])}
          </div>
          <div
            className={classNames(styles[`typesContainer__type__${types[1]}`])}
          >
            {Capitalize(types[1])}
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  console.log('Pokemon data:', pokemon);

  if (!pokemon) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path='*' element={<StandardPage />}>
        <Route
          index
          element={
            <>
              <button className={styles.back} onClick={() => navigate(-1)}>
                {'< Voltar '}
              </button>
              <section>
                <h1 className={styles.title}>{Capitalize(pokemon.name)}</h1>
                <div className={styles.pokemonInfo}>
                  <div className={styles.imageContainer}>
                    <img src={pokemon.image} alt={pokemon.name} />
                  </div>
                  <div className={styles.statsContainer}>
                    <div className={styles.stats}>
                      <div className={styles.stat}>
                        HP:
                        <div className={styles.statBar}>
                          <div
                            className={classNames({
                              [styles.statBarFill]: true,
                              [styles.statValue]: true,
                            })}
                            style={{ width: `${pokemon.stats[0]}%` }}
                          >
                            {pokemon.stats[0]}
                          </div>
                        </div>
                      </div>
                      <div className={styles.stat}>
                        Attack:
                        <div className={styles.statBar}>
                          <div
                            className={classNames({
                              [styles.statBarFill]: true,
                              [styles.statValue]: true,
                            })}
                            style={{ width: `${pokemon.stats[1]}%` }}
                          >
                            {pokemon.stats[1]}
                          </div>
                        </div>
                      </div>
                      <div className={styles.stat}>
                        Defense:
                        <div className={styles.statBar}>
                          <div
                            className={classNames({
                              [styles.statBarFill]: true,
                              [styles.statValue]: true,
                            })}
                            style={{ width: `${pokemon.stats[2]}%` }}
                          >
                            {pokemon.stats[2]}
                          </div>
                        </div>
                      </div>
                      <div className={styles.stat}>
                        Special Attack:
                        <div className={styles.statBar}>
                          <div
                            className={classNames({
                              [styles.statBarFill]: true,
                              [styles.statValue]: true,
                            })}
                            style={{ width: `${pokemon.stats[3]}%` }}
                          >
                            {pokemon.stats[3]}
                          </div>
                        </div>
                      </div>
                      <div className={styles.stat}>
                        Special Defense:
                        <div className={styles.statBar}>
                          <div
                            className={classNames({
                              [styles.statBarFill]: true,
                              [styles.statValue]: true,
                            })}
                            style={{ width: `${pokemon.stats[4]}%` }}
                          >
                            {pokemon.stats[4]}
                          </div>
                        </div>
                      </div>
                      <div className={styles.stat}>
                        Speed:
                        <div className={styles.statBar}>
                          <div
                            className={classNames({
                              [styles.statBarFill]: true,
                              [styles.statValue]: true,
                            })}
                            style={{ width: `${pokemon.stats[5]}%` }}
                          >
                            {pokemon.stats[5]}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.typesContainer}>{pokeType()}</div>
                    <div className={styles.tags}>
                      <div className={styles.tags__height}>
                        {pokemon.height / 10} M
                      </div>
                      <div className={styles.tags__weight}>
                        {pokemon.weight / 10} Kg
                      </div>
                      <div className={styles.tags__id}>#{pokemon.id}</div>
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

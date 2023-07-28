import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { PokedexData, Type } from 'Types/pokeData';
import Capitalize from 'Types/util';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Home.module.scss';
import Theme from 'styles/Theme.module.scss';
import Kanto from 'assets/Kanto.webp';
import Cidades from 'assets/Citys.jpg';

export default function Home() {
  const [pokemons, setPokemons] = useState<PokedexData[]>([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const iEnds = [];
    for (let i = 1; i < 152; i++) {
      iEnds.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(iEnds.map((iEnd) => axios.get(iEnd)))
      .then((results) => {
        const pokemonData = results.map((result) => ({
          id: result.data.id,
          name: result.data.name,
          image: result.data.sprites.front_default,
          height: result.data.height,
          weight: result.data.weight,
          types: result.data.types.map((type: Type) => type.type.name),
        }));
        setPokemons(pokemonData);
      })
      .catch((error) => console.log(error));
  };

  let pokemonsRecomendados: PokedexData[] = [];
  if (pokemons.length > 0) {
    pokemonsRecomendados = [...pokemons]; // Copia os pokemons para pokemonsRecomendados
  }
  pokemonsRecomendados = pokemonsRecomendados
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const pokeType = (pokemon: PokedexData) => {
    if (pokemon.types.length === 1) {
      return (
        <div
          className={classNames(
            styles[`typesContainer__type__${pokemon.types[0]}`]
          )}
        >
          {Capitalize(pokemon.types[0])}
        </div>
      );
    } else if (pokemon.types.length === 2) {
      return (
        <>
          <div
            className={classNames(
              styles[`typesContainer__type__${pokemon.types[0]}`]
            )}
          >
            {Capitalize(pokemon.types[0])}
          </div>
          <div
            className={classNames(
              styles[`typesContainer__type__${pokemon.types[1]}`]
            )}
          >
            {Capitalize(pokemon.types[1])}
          </div>
        </>
      );
    }

    return null;
  };

  const lookPokedex = () => {
    navigate('/pokedex');
  };

  return (
    <section>
      <h3 className={Theme.title}>Pokemons mais procurados</h3>
      <div className={styles.bestPokes}>
        {pokemonsRecomendados.map((pokemon: PokedexData) => (
          <div key={pokemon.id}>
            <div className={styles.pokeContainer}>
              <div className={styles.bestPoke__image}><img src={pokemon.image} alt={pokemon.name} /></div>
              <div className={styles.bestPoke__title}><h2>{Capitalize(pokemon.name)}</h2></div>
              <div className={styles.bestPoke__tags}>{pokeType(pokemon)}</div>
              <div className={styles.bestPoke__tags}>
                <div className={styles.bestPoke__height}> {pokemon.height / 10}M </div>
                <div className={styles.bestPoke__weight}>{pokemon.weight / 10}Kg </div>
                <div className={styles.bestPoke__id}>#{pokemon.id}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonContainer__button} onClick={lookPokedex}> Ver Todos </button>
      </div>
      <div>
        <h2 className={styles.subTitle}> Bem Vindos </h2>
        <p className={styles.description}>
          {' '}
          Aqui seria um site aos pokemons da região Kanto. Aqui possui 151
          pokemons para se capturar, contém 9 cidades, uma vila, uma ilha que
          contém uma cidade.{' '}
        </p>
      </div>

      <h3 className={Theme.title}> Região Kanto </h3>
      <div className={styles.map}>
        <img className={styles.map__Kanto} src={Kanto} alt='Mundo Pokemon' />
        <img className={styles.map__Kanto} src={Cidades} alt='Mundo Pokemon' />
      </div>
    </section>
  );
}

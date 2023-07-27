import styles from './Home.module.scss';
import Theme from 'styles/Theme.module.scss';
import Kanto from 'assets/Kanto.webp';
import Cidades from 'assets/Citys.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonData } from 'Types/pokeData';

export default function Home() {
  const { state } = useLocation();
  const pokemon: PokemonData | null = state ? (state as { pokemon: PokemonData }).pokemon : null;
  
  let pokemonsRecomendados: PokemonData[] = [];
  if (pokemon) {
    pokemonsRecomendados = [pokemon, ...pokemonsRecomendados];
  }
  pokemonsRecomendados = pokemonsRecomendados.sort(() => 0.5 - Math.random()).slice(0, 3);

  function redirecionarDetalhes(pokemon: PokemonData) {
    const navigate = useNavigate();
    console.log(pokemon);
    navigate(`/pokemon/${pokemon.id}`,{state: {pokemon}, replace:true});

  }
  return (
    <section >
      <h3 className={Theme.title}>
        Pokemons mais procurados
      </h3>
      <div className={styles.bestPoke}>
        {pokemonsRecomendados.map(pokemon => (
          <div key={pokemon.id} className={styles.recomendado}>
            <div className={styles.bestPoke__image}>
              <img src={pokemon.front_default} alt={pokemon.name} />
            </div>
            <button 
              className={styles.bestPoke__button}
              onClick={() => redirecionarDetalhes(pokemon)}
            >
                  Ver mais
            </button>
          </div>
        ))} 
      </div> 
      <div>
        <h2 className={Theme.subTitle}> Bem Vindos </h2>
        <p className={Theme.description}> Aqui seria um site aos pokemons da região Kanto. Aqui possui 151 pokemons para se capturar, contém 9 cidades, uma vila, uma ilha que contém uma cidade.  </p>
      </div>
      
      <h3 className={Theme.title}> Região Kanto </h3>
      <div className={styles.map}>
        <img  className={styles.map__Kanto} src={Kanto} alt="Mundo Pokemon" />
        <img  className={styles.map__Kanto} src={Cidades} alt="Mundo Pokemon" />
      </div>
    </section>
  );
}
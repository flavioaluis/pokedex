import { useLocation } from 'react-router-dom';
import styles from './Home.module.scss';
import Theme from 'styles/Theme.module.scss';
import Kanto from 'assets/Kanto.webp';


interface PokemonData {
  id: number;
  name: string;
  front_default: string;
  stats:number[];
  height: number;
  weight: number;
  types: string[];
  
}

export default function Home() {
  const { state } = useLocation();
  const { pokemon } = state as { pokemon: PokemonData };

  const pokemonsRecomendados = Array.isArray(pokemon)
    ? pokemon.sort(() => 0.5 - Math.random()).splice(0, 3)
    : [];
  return (
    <section >
      <h3 className={Theme.title}>
        Pokemons mais procurados
      </h3>
      <div className={styles.recomendados}>
        {pokemonsRecomendados.map(pokemon => (
          <div key={pokemon.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={pokemon.front_default} alt={pokemon.name} />
            </div>
            <button className={styles.recomendado__botao}>
                  Ver mais
            </button>
          </div>
        ))} 
      </div> 
      <div className={styles.bestPokes}>
        <div className={styles.bestPoke}>
          <div className={styles.bestPoke__image}>
              
          </div>
          <button className={styles.bestPoke__button}>
              Ver Mais
          </button>
        </div>
      </div>
      <div>
        <h2 className={Theme.subTitle}> Bem Vindos </h2>
        <p className={Theme.description}> Aqui seria um site aos pokemons da região Kanto.</p>
      </div>
      
      <h3 className={Theme.title}> Região Kanto </h3>
      <div className={styles.kanto}>
        <img src={Kanto} alt="Mundo Pokemon" />
        <div className={styles.mapKanto}>

        </div>
        
      </div>
    </section>
  );
}
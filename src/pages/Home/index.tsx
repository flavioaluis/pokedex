import styles from './Home.module.scss';
import Theme from 'styles/Theme.module.scss';
import Kanto from 'assets/Kanto.webp';

export default function Home() {
  return (
    <section >
      <h3 className={Theme.title}>
        Pokemons mais procurados
      </h3>
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
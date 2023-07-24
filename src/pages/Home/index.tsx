import styles from './Home.module.scss';

export default function Home() {
  return (
    <section>
      <h3 className={styles.title}>
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
    </section>
  );
}
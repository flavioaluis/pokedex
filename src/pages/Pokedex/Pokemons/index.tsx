import { PokedexData } from 'Types/pokeData';
import Capitalizar from 'Types/util';
import classNames from 'classnames';
import styles from './Pokemons.module.scss';

export default function Pokemons({ id, name, image, height, weight, types }: PokedexData) { 
  const pokeType = () => {
  
    if (types.length === 1) {
      return (
        <div className={classNames(styles[`typesContainer__type__${types[0]}`])}>
          {Capitalizar(types[0])}
        </div>
      );
    } else if (types.length === 2) {
      return (
        <>
          <div className={classNames(styles[`typesContainer__type__${types[0]}`])}>
            {Capitalizar(types[0])}
          </div>
          <div className={classNames(styles[`typesContainer__type__${types[1]}`])}>
            {Capitalizar(types[1])}
          </div>
        </>
      );
    } else {
      return null;
    }
  };
  
  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemon__image}><img src={image} alt={`${name} sprite`} /></div>
      <div>
        <div className={styles.pokemon__title}><h2>{Capitalizar(name)}</h2></div>
        <div className={styles.pokemon__tags}>{pokeType()}</div>
        <div className={styles.pokemon__tags}>
          <div className={styles.pokemon__weight}>{height/10}M</div>
          <div className={styles.pokemon__height}>{weight/10}Kg</div>
          <div className={styles.pokemon__id}>#{id}</div>
        </div>
      </div>  
    </div>
  );
}

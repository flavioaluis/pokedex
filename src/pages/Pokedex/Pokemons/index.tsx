import classNames from 'classnames';
import styles from './Pokemons.module.scss';

// Defina os tipos no props
interface PokemonData {
  id: number
  name: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
}

export default function Pokemons({ id, name, image, height, weight, types }: PokemonData) {
  const capitalizeFirstLetter = (str:string) => {
    return (str.charAt(0).toUpperCase() + str.slice(1));
  };
  
  const pokeType = () => {
    if (types[1]) {
      return capitalizeFirstLetter(types[0]) + ' | ' + capitalizeFirstLetter(types[1]);
    }
    return capitalizeFirstLetter(types[0]);
  };

  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemon__image}><img src={image} alt={`${name} sprite`} /></div>
      <div>
        <div className={styles.pokemon__title}><h2>{capitalizeFirstLetter(name)}</h2></div>
        <div className={styles.pokemon__tags}>
          <div className={styles.pokemon__tags}>
            <div className={classNames({
              [styles.pokemon__type]:true,
              [styles[`pokemon__type__${types[0].toLowerCase()}`]]:true,
            })}>{pokeType()}</div> 
          </div>
          <div className={styles.pokemon__weight}>{height/10} M</div>
          <div className={styles.pokemon__height}>{weight/10} Kg</div>
          <div className={styles.pokemon__id}>#{id}</div>
        </div>
      </div>  
    </div>
  );
}

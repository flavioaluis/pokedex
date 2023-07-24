import classNames from 'classnames';
import styles from './Item.module.scss';


interface Type {
    type: {
      name: string;
    };
  }
  
  interface Props {
    id: number;
    name: string;
    image: string;
    height: number;
    weight:number;
    types: Type[];
  }
  
export default function Pokemon({ id,name, image, types, height, weight }: Props ) {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const pokeType = () => {
    if (types[1]) {
      return capitalizeFirstLetter(types[0].type.name) + ' | ' + capitalizeFirstLetter(types[1].type.name);
    }
    return capitalizeFirstLetter(types[0].type.name);
  };
  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemon__image}>
        <img src={image} alt={`${name} sprite`} />
      </div>
      <div>
        <div className={styles.pokemon__title}>
          <h2>{name}</h2>
        </div>
        <div className={styles.pokemon__tags}>
          <div className={classNames({
            [styles.pokemon__type]:true,
            [styles[`pokemon__type__${types[0].type.name.toLowerCase()}`]]:true,
          })}>{pokeType()}</div>
          <div className={styles.pokemon__weight}>{height/10} M</div>
          <div className={styles.pokemon__height}>{weight/10} Kg</div>
          <div className={styles.pokemon__category}>#{id}</div>
        </div>
      </div>
    </div>
  );
}

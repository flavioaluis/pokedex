import styles from './Item.module.scss';

interface Props {
    name:string;
    image:string;
}
export default function Pokemon({name, image}:Props) {
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
                    <div className={styles.pokemon__type}> Grass </div>
                    <div className={styles.pokemon__weight}> 0.7 m </div>
                    <div className={styles.pokemon__height}> 6.9 kg </div>
                    <div className={styles.pokemon__category}> Seed </div>
                </div>
            </div>
        </div>
    );
}

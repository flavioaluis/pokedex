import styles from './Pokedex.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Pokedex () {
    return (
        <main>
            <nav className={styles.menu}>Pokedex</nav>
            <Logo width={200}/>
            <header className={styles.header}>
                <div className={styles.header__text}>

                </div>
            </header>
        </main>
    )
}
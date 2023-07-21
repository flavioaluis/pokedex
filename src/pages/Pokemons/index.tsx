import { useState } from 'react';
import styles from './Pokemons.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';



export default function Pokemons () {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
                <Logo width={250} height={100}/>
            </nav>
            <header className={styles.header}>
            </header>
            <section className={styles.pokemons}>
                <h3 className={styles.pokemons__title}> Procure o Pokemon</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.pokemons__filters}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
            </section>
        </main>
    )
}
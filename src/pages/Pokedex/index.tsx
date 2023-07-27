import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PokemonData, Stat, Type, PokemonLinkProps } from 'Types/pokeData';
import Theme from 'styles/Theme.module.scss';
import styles from './Pokedex.module.scss';
import Pokemons from './Pokemons';
import Buscador from './Buscador';

const PokemonLink: React.FC<PokemonLinkProps> = ({
  to,
  className,
  children,
}: PokemonLinkProps) => {
  return (
    <Link to={to} state={to.state} className={className}>
      {children}
    </Link>
  );
};

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [searchedPokemons, setSearchedPokemons] = useState<PokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const iEnds = [];
    for (let i = 1; i < 152; i++) {
      iEnds.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(iEnds.map((iEnd) => axios.get(iEnd)))
      .then((results) => {
        const pokemonData = results.map((result) => ({
          id: result.data.id,
          name: result.data.name,
          image: result.data.sprites.front_default,
          stats: result.data.stats.map(
            (base_stat: Stat) => base_stat.base_stat
          ),
          height: result.data.height,
          weight: result.data.weight,
          types: result.data.types.map((type: Type) => type.type.name),
        }));

        setPokemons(pokemonData);
        setSearchedPokemons(pokemonData); // Original data
      })
      .catch((error) => console.log(error));
  };

  const pokemonSearch = (name: string) => {
    if (name === '') {
      setSearchedPokemons(pokemons); // Reset to the original
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
      setSearchedPokemons(filteredPokemons);
    }
  };

  const displayPokemons = searchedPokemons.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Troca de página
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };
  return (
    <section>
      <h3 className={Theme.title}> Procure o Pokemon</h3>
      <div className={styles.pokedex__search}>
        <Buscador pokemonSearch={pokemonSearch} />
      </div>
      <div className={styles.pokedex__pokemons}>
        {displayPokemons.map((pokemon, key) => (
          <div key={key}>
            <PokemonLink
              to={{
                pathname: `/pokemon/${pokemon.id}`,
                state: { pokemon },
    
              }}
              
              className={styles.link}
            >
              <Pokemons
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                height={pokemon.height}
                weight={pokemon.weight}
                types={pokemon.types}
              />
            </PokemonLink>

          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={Math.ceil(searchedPokemons.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(selected) => handlePageChange(selected.selected)}
          containerClassName={styles.paginationContainer}
          pageClassName={styles.paginationItem}
          previousClassName={styles.paginationItem}
          nextClassName={styles.paginationItem}
          activeClassName={styles.paginationActive}
        />
      </div>
    </section>
  );
}

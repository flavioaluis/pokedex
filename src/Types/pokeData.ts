// Variáveis dos detalhes dos pokemons
export interface PokemonData {
  id: number;
  name: string;
  image: string;
  stats: number[];
  height: number;
  weight: number;
  types: string[];  
  // Defina os tipos no props
}
export interface PokedexData {
  id: number
  name: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
}
export interface Type {
  type: {
    name: string;
  };
}

export interface Stat {
  base_stat: number;
}

// Link Props para mandar detalhes a pagina de pokemon
export interface PokemonLinkProps {
  to: {
    pathname: string;
    state: { pokemon: PokemonData };
  };
  className?: string;
  children: React.ReactNode;
}


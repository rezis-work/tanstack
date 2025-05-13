export interface PokemonDetail {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: { front_default: string };
}

export interface PokemonList {
  id: string;
  name: string;
}

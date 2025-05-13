import type { PokemonDetail, PokemonList } from "../types/pokemon-types";

export async function getPokemonDetail(id: string): Promise<PokemonDetail> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
}

export async function getPokemonList(): Promise<PokemonList[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = (await response.json()) as {
    results: { name: string; url: string }[];
  };

  return data.results.map((pokemon) => ({
    id: pokemon.url.split("/").filter(Boolean).pop()!,
    name: pokemon.name,
  }));
}

import { createFileRoute } from "@tanstack/react-router";
import { getPokemonDetail } from "../../api/pokemon";
import type { PokemonDetail } from "../../types/pokemon-types";
import SinglePokemon from "../../components/single-pokemon";
export const Route = createFileRoute("/pokemons/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const pokemon = await getPokemonDetail(params.id);
    return { pokemon };
  },
});

function RouteComponent() {
  return <PokemonRoute />;
}

function PokemonRoute() {
  const { pokemon }: { pokemon: PokemonDetail } = Route.useLoaderData();
  return <SinglePokemon pokemon={pokemon} />;
}

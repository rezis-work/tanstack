import { createFileRoute, Link } from "@tanstack/react-router";
import { getPokemonList } from "../../api/pokemon";
import type { PokemonList } from "../../types/pokemon-types";

export const Route = createFileRoute("/pokemons/")({
  component: RouteComponent,
  loader: getPokemonList,
});

function RouteComponent() {
  return <PokemonsList />;
}

function PokemonsList() {
  const pokemons: PokemonList[] = Route.useLoaderData();
  console.log(pokemons);
  return (
    <div>
      <h2>pokemons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemonInfo) => (
          <div
            key={pokemonInfo.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <Link
              to="/pokemons/$id"
              params={{ id: pokemonInfo.id }}
              className="block text-center"
            >
              <div className="text-lg font-semibold text-gray-800 capitalize mb-2">
                {pokemonInfo.name}
              </div>
              <div className="text-sm text-gray-500">#{pokemonInfo.id}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

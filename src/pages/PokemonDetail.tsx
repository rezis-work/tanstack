import { getRouteApi } from "@tanstack/react-router";
const routeApi = getRouteApi("/$pokemonId");

export default function PokemonDetail() {
  const pokemon = routeApi.useLoaderData();
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
          <p className="text-gray-600">
            #{pokemon.id.toString().padStart(3, "0")}
          </p>
          <div className="flex gap-2 mt-2">
            {pokemon.types.map((type: any) => (
              <span
                key={type.type.name}
                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Height</h3>
          <p>{pokemon.height / 10}m</p>
        </div>
        <div>
          <h3 className="font-semibold">Weight</h3>
          <p>{pokemon.weight / 10}kg</p>
        </div>
        <div>
          <h3 className="font-semibold">Abilities</h3>
          <ul className="list-disc pl-5">
            {pokemon.abilities.map((ability: any) => (
              <li key={ability.ability.name} className="capitalize">
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

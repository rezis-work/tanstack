import type { PokemonDetail } from "../types/pokemon-types";

interface SinglePokemonProps {
  pokemon: PokemonDetail;
}

function SinglePokemon({ pokemon }: SinglePokemonProps) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800 capitalize">
          {pokemon.name} #{pokemon.id}
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48 object-contain mb-4"
        />
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-600">Height</h3>
            <p className="text-lg">{(pokemon.height / 10).toFixed(1)} m</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-600">Weight</h3>
            <p className="text-lg">{(pokemon.weight / 10).toFixed(1)} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePokemon;

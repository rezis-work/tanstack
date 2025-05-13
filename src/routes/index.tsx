import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to the Pokémon App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore and discover your favorite Pokémon with our interactive
          collection.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/pokemons"
            className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
          >
            Browse Pokémon
          </Link>
          <Link
            to="/profile"
            className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

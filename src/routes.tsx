import { createRootRoute, createRoute } from "@tanstack/react-router";
import Root from "./components/root";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PokemonDetail from "./pages/PokemonDetail";
import { getPokemon } from "./api";
import { ItemFilters } from "./types/item-filters";
import * as v from "valibot";
import Search from "./pages/Search";

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const pokemonDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$pokemonId",
  component: PokemonDetail,
  loader: ({ params }) => getPokemon(params.pokemonId),
});

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  validateSearch: (search) => v.parse(ItemFilters, search),
  component: Search,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  pokemonDetailRoute,
  searchRoute,
]);

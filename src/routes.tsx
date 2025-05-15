import {
  createRootRouteWithContext,
  createRoute,
  redirect,
} from "@tanstack/react-router";
import Root from "./components/root";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PokemonDetail from "./pages/PokemonDetail";
import { getPokemon } from "./api";
import { ItemFilters } from "./types/item-filters";
import * as v from "valibot";
import Search from "./pages/Search";
import type { AuthContext } from "./hooks/useAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./components/Logout";
type RouterContext = {
  authenticated: AuthContext;
};

const rootRoute = createRootRouteWithContext<RouterContext>()({
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
  beforeLoad: ({ context }) => {
    if (!context.authenticated.isAuthenticated()) {
      return redirect({ to: "/login" });
    }
  },
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

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

const logoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/logout",
  component: Logout,
  beforeLoad: ({ context }) => {
    if (!context.authenticated.isAuthenticated()) {
      return redirect({ to: "/login" });
    }
  },
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  pokemonDetailRoute,
  searchRoute,
  loginRoute,
  registerRoute,
  logoutRoute,
]);

import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { AuthContext } from "../hooks/useAuth";

const activeLinkProps = {
  activeProps: {
    className: "border-red-500 text-gray-900",
  },
  inactiveProps: {
    className:
      "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
  },
};

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 py-4">My App</h1>
        <nav className="bg-white shadow-sm">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                {...activeLinkProps}
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                {...activeLinkProps}
              >
                {({ isActive }) => (
                  <>
                    Profile
                    {isActive && (
                      <span className="ml-1 text-xs">(user profile)</span>
                    )}
                  </>
                )}
              </Link>
              <Link
                to="/pokemons"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                {...activeLinkProps}
              >
                Pokemons
              </Link>
              <Link
                to="/search"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                {...activeLinkProps}
              >
                Search
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                {...activeLinkProps}
              >
                Login
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                {...activeLinkProps}
              >
                Dashboard
              </Link>
              <Link
                to="/settings"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                {...activeLinkProps}
              >
                Settings
              </Link>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

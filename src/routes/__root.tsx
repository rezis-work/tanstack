import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

const activeProps = {
  style: {
    color: "red",
  },
};

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" activeProps={activeProps}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" activeProps={activeProps}>
              {({ isActive }) => (
                <>Profile {isActive && "You are on active page"}</>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

import { Link, Outlet } from "@tanstack/react-router";

export default function Root() {
  return (
    <div>
      <ul className="flex gap-4 items-center justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/1">Pokemon 1</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

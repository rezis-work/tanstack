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
      </ul>
      <Outlet />
    </div>
  );
}

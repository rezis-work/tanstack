import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(hidden-folder)/layouts/visibleLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg font-medium text-gray-700 mb-4">
          This layout is visible in the URL 👀
        </p>
        <div className="flex space-x-4 mb-4">
          <Link
            to="/layouts/visibleLayout/foo"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Foo
          </Link>
          <Link
            to="/layouts/visibleLayout/bar"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Bar
          </Link>
        </div>
        <hr className="my-4 border-gray-200" />
        <Outlet />
      </div>
    </div>
  );
}

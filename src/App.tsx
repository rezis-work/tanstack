import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth";
import { NotFound } from "./components/not-found";
const router = createRouter({
  routeTree,
  context: {
    authentication: undefined!,
  },
  defaultNotFoundComponent: () => <NotFound />,
});
function App() {
  const auth = useAuth();
  return (
    <RouterProvider
      router={router}
      context={{
        authentication: auth,
      }}
    />
  );
}

export default App;

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routes";
import { useAuth } from "./hooks/useAuth";
const router = createRouter({
  routeTree,
  context: {
    authenticated: undefined!,
  },
});
function App() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ authenticated: auth }} />;
}

export default App;

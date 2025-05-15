import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routes";
const router = createRouter({ routeTree });
function App() {
  return <RouterProvider router={router} />;
}

export default App;

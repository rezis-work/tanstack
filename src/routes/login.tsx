import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const Route = createFileRoute("/login")({
  component: LoginRoute,
});

function LoginRoute() {
  const { isLogged, signIn, signOut } = useAuth();
  const [authLoad, setAuthLoad] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Please login!</h2>
      {isLogged() ? (
        <div className="space-y-4">
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-200"
            onClick={() => {
              setAuthLoad(!authLoad);
              signOut();
            }}
          >
            Log out
          </button>
          <h1 className="text-lg text-gray-700">You are logged in!</h1>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
            onClick={() => {
              setAuthLoad(!authLoad);
              signIn();
            }}
          >
            Log in
          </button>
          <h1 className="text-lg text-gray-700">You are not logged in!</h1>
        </div>
      )}
    </div>
  );
}

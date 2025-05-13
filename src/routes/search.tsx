import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ItemFilters, type ItemFilter } from "../types/filter";
import * as v from "valibot";

export const Route = createFileRoute("/search")({
  component: SearchRoute,
  validateSearch: (search) => v.parse(ItemFilters, search),
});

function SearchRoute() {
  const { query, hasDiscount, categories } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  console.log(query, hasDiscount, categories);
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Search Items</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Query
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) =>
              navigate({
                search: (prev: ItemFilter) => ({
                  ...prev,
                  query: e.target.value,
                }),
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Type to search..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="discount"
              checked={hasDiscount || false}
              onChange={(e) =>
                navigate({
                  search: (prev: ItemFilter) => ({
                    ...prev,
                    hasDiscount: e.target.checked,
                  }),
                })
              }
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="discount"
              className="ml-2 block text-sm text-gray-700"
            >
              Has Discount
            </label>
          </div>

          <div className="w-full sm:w-48">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              value={categories?.[0] || ""}
              onChange={(e) => {
                const value = e.target.value;
                navigate({
                  search: (prev: ItemFilter) => ({
                    ...prev,
                    categories: value
                      ? [value as "electronics" | "books" | "clothing" | "toys"]
                      : undefined,
                  }),
                });
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
              <option value="toys">Toys</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Current Filters
        </h3>
        <pre className="text-sm text-gray-600 overflow-x-auto p-3 bg-white rounded border border-gray-200">
          {JSON.stringify(
            {
              query,
              hasDiscount,
              categories,
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}

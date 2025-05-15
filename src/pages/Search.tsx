import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { ItemFilters } from "../types/item-filters";

const route = getRouteApi("/search");
export default function Search() {
  const navigate = useNavigate();
  const {
    categories = [],
    hasDiscount = false,
    query = "",
  } = route.useSearch();
  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({
      search: (prev: ItemFilters) => ({
        ...prev,
        [name]: value,
      }),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Search Items</h1>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Search Query</label>
        <input
          type="text"
          value={query}
          onChange={(e) => updateFilters("query", e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type to search..."
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={hasDiscount}
            onChange={(e) => updateFilters("hasDiscount", e.target.checked)}
            className="h-4 w-4"
          />
          <span>On Discount</span>
        </label>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Categories</h2>
        <div className="space-y-2">
          {["electronics", "books", "clothing", "home", "other"].map(
            (category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...categories, category]
                      : categories.filter((c: string) => c !== category);
                    updateFilters("categories", newCategories);
                  }}
                  className="h-4 w-4"
                />
                <span className="capitalize">{category}</span>
              </label>
            )
          )}
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-medium mb-2">Current Filters:</h3>
        <p>Query: {query || "None"}</p>
        <p>On Discount: {hasDiscount ? "Yes" : "No"}</p>
        <p>
          Categories: {categories.length > 0 ? categories.join(", ") : "All"}
        </p>
      </div>
    </div>
  );
}

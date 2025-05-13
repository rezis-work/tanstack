import * as v from "valibot";

export const Category = v.union([
  v.literal("electronics"),
  v.literal("books"),
  v.literal("clothing"),
  v.literal("toys"),
]);

export const ItemFilters = v.object({
  query: v.optional(v.string()),
  hasDiscount: v.optional(v.boolean()),
  categories: v.optional(v.array(Category)),
});

export type ItemFilter = v.InferOutput<typeof ItemFilters>;

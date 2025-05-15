import * as v from "valibot";

const Category = v.union([
  v.literal("electronics"),
  v.literal("books"),
  v.literal("clothing"),
  v.literal("home"),
  v.literal("other"),
]);

export const ItemFilters = v.object({
  categories: v.optional(v.array(Category)),
  hasDiscount: v.optional(v.boolean()),
  query: v.optional(v.string()),
});

export type ItemFilters = v.InferOutput<typeof ItemFilters>;

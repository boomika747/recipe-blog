export async function getRecipes(locale) {
  return [
    {
      slug: "classic-paella",
      title:
        locale === "es"
          ? "Paella Clásica"
          : locale === "fr"
          ? "Paella Classique"
          : "Classic Paella",
      ingredients: ["Rice", "Seafood", "Spices"],
      instructions: "Cook all ingredients together.",
      image: "/paella.jpg",
      featured: true,
      category: "Spanish"
    }
  ];
}

export async function getRecipeBySlug(slug, locale) {
  const recipes = await getRecipes(locale);
  return recipes.find(r => r.slug === slug);
}

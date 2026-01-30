import { getRecipes } from "../../lib/contentful";
import { useState } from "react";
import RecipeCard from "../../components/RecipeCard";

export async function getStaticProps({ locale }) {
  return { props: { recipes: await getRecipes(locale) } };
}

export default function Recipes({ recipes }) {
  const [query, setQuery] = useState("");

  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        data-testid="search-input"
        placeholder="Search"
        onChange={e => setQuery(e.target.value)}
      />
      {filtered.map(r => (
        <RecipeCard key={r.slug} recipe={r} />
      ))}
    </>
  );
}

import { getRecipes } from "../lib/contentful";
import RecipeCard from "../components/RecipeCard";

export async function getStaticProps({ locale }) {
  const recipes = await getRecipes(locale);
  return { props: { recipes } };
}

export default function Home({ recipes }) {
  return (
    <div data-testid="featured-recipes">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <div data-testid="recipe-card">
      <Image src={recipe.image} alt={recipe.title} width={300} height={200} />
      <h3>{recipe.title}</h3>
      <Link href={`/recipes/${recipe.slug}`}>View</Link>
    </div>
  );
}

import { getRecipes, getRecipeBySlug } from "../../lib/contentful";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export async function getStaticPaths({ locales }) {
  const recipes = await getRecipes("en");
  const paths = [];

  recipes.forEach(r =>
    locales.forEach(l => paths.push({ params: { slug: r.slug }, locale: l }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  return { props: { recipe: await getRecipeBySlug(params.slug, locale) } };
}

export default function Recipe({ recipe }) {
  const { t } = useTranslation("common");

  return (
    <>
      <h1 data-testid="recipe-title">{recipe.title}</h1>
      <Image src={recipe.image} alt="" width={600} height={400} />

      <h2 data-testid="ingredients-heading">{t("ingredients")}</h2>
      <ul data-testid="recipe-ingredients">
        {recipe.ingredients.map(i => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <p data-testid="recipe-instructions">{recipe.instructions}</p>

      <a
        data-testid="social-share-twitter"
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          typeof window !== "undefined" ? window.location.href : ""
        )}`}
      >
        Share
      </a>
    </>
  );
}

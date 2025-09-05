// RecipeDetails.js
import { useParams } from "react-router-dom";
import "./SuggestRecipesDetails.css";

export default function SuggestRecipesDetails({ recipes }) {
  const { id } = useParams();

  // نبحث عن الوصفة بالـ id
  const recipe = recipes.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <h2>❌ Recipe not found!</h2>;
  }

  function Back() {
    window.history.back();
  }

  return (
    <>
      <div className="container-recipes-details">
        <div
          className="image-recipes-details"
          style={{ backgroundImage: `url(${recipe.image})` }}
        ></div>

        <div className="recipes-information">
          <h1>{recipe.title}</h1>
          <h2>{recipe.classification}</h2>
          <h3>Ingredients :</h3>
          <ol>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="Instructions">
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <button className="back" onClick={Back}>
        Back
      </button>
    </>
  );
}

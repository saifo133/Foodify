import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MyRecipesDetails.css';

const MyRecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  // جلب الوصفة من localStorage
  const recipes = JSON.parse(localStorage.getItem('myRecipes') || '[]');
  const recipe = recipes.find(r => r.id === recipeId);

  if (!recipe) {
    return (
      <div className="recipe-details-page">
        <div className="not-found">
          <h2>Recipe not found</h2>
          <button onClick={() => navigate('/my-recipes')}>
            Back to My Recipes
          </button>
        </div>
      </div>
    );
  }

  const deleteRecipe = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      const updatedRecipes = recipes.filter(r => r.id !== recipeId);
      localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
      navigate('/my-recipes');
    }
  };

  const Back = () => {
    navigate('/my-recipes');
  };

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
          
          {/* إضافة عرض الوصف */}
          <h3>Description :</h3>
          <div className="description-container">
            <p>{recipe.description}</p>
          </div>
        </div>
      </div>


    <div className='Ingredients'>
      <h3>Ingredients :</h3>
          <ol>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ol>
    </div>

      <div className="Instructions">
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="action-buttons">
        <button className="back" onClick={Back}>
          Back
        </button>
        <button className="delete-recipe-btn" onClick={deleteRecipe}>
          Delete Recipe
        </button>
      </div>
    </>
  );
};

export default MyRecipeDetails;
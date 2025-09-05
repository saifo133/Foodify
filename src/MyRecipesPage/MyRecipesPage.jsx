import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MyRecipesPage.css';

const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // جلب الوصفات من localStorage
    const myRecipes = JSON.parse(localStorage.getItem('myRecipes') || '[]');
    setRecipes(myRecipes);
  }, []);

  const deleteRecipe = (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
      setRecipes(updatedRecipes);
      localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
    }
  };

  if (recipes.length === 0) {
    return (
      <div className="my-recipes-page">
        <div className="no-recipes">
          <h2>You don't have any recipes yet</h2>
          <p>Start creating your first recipes now!</p>
          <Link to="/create-recipes" className="create-link">
            Create New Recipe
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-recipes-page">
      <div className="my-recipes-header">
        <h1>My Recipes</h1>
        <p>Manage the recipes you've created</p>
      </div>

      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div 
              className="card-image"
              style={{ backgroundImage: `url(${recipe.image})` }}
            ></div>
            
            <div className="card-content">
              <h3>{recipe.title}</h3>
              <p className="classification">{recipe.classification}</p>            
              <div className="card-actions">
                <Link 
                  to={`/my-recipes/details/${recipe.id}`} 
                  className="details-btn"
                >
                  Details
                </Link>
                <button 
                  onClick={() => deleteRecipe(recipe.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="create-new-container">
        <Link to="/create-recipes" className="create-new-btn">
          + Add New Recipe
        </Link>
      </div>
    </div>
  );
};

export default MyRecipesPage;
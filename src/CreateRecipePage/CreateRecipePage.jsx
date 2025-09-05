import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateRecipePage.css';

const CreateRecipes = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: '',
    description: '', // إضافة حقل الوصف
    ingredients: '',
    instructions: '',
    classification: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setRecipe(prev => ({ ...prev, image: e.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new recipe
    const newRecipe = {
      id: Date.now(), // Use timestamp as unique ID
      title: recipe.title,
      description: recipe.description, // إضافة الوصف
      ingredients: recipe.ingredients.split('\n').filter(ing => ing.trim() !== ''),
      instructions: recipe.instructions.split('\n').filter(step => step.trim() !== ''),
      classification: recipe.classification,
      image: recipe.image,
      isCustom: true // To identify as user-created recipe
    };

    // Get existing recipes from localStorage
    const existingRecipes = JSON.parse(localStorage.getItem('myRecipes') || '[]');
    
    // Add new recipe
    const updatedRecipes = [...existingRecipes, newRecipe];
    
    // Save to localStorage
    localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
    
    // Navigate to My Recipes page
    navigate('/my-recipes');
  };

  return (
    <div className="create-recipes-page">
      <div className="create-recipes-container">
        <div className="create-recipes-header">
          <h1>Unleash your creativity in the kitchen</h1>
          <p>Add your favorite ingredients, write clear steps, and make each dish uniquely yours. Whether it's a family favorite or a brand-new idea, this is your space to bring delicious creations to life.</p>
        </div>

        <div className="create-recipes-content">
          <h2>Add your Recipe</h2>
          <p className="subtitle">Ensure you write all information for your recipe</p>

          <form onSubmit={handleSubmit} className="recipe-form">
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleChange}
                required
                placeholder="Enter recipe title"
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="description"
                value={recipe.description}
                onChange={handleChange}
                rows="3"
                required
                placeholder="Enter a brief description of your recipe"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Ingredients (separate by lines):</label>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                rows="5"
                required
                placeholder="1 cup flour&#10;2 tbsp sugar&#10;..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Instructions (separate by lines):</label>
              <textarea
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
                rows="7"
                required
                placeholder="Mix dry ingredients&#10;Add liquids gradually&#10;..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Classification:</label>
              <select
                name="classification"
                value={recipe.classification}
                onChange={handleChange}
                required
              >
                <option value="">Select classification</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Appetizer">Appetizer</option>
                <option value="Beverage">Beverage</option>
              </select>
            </div>

            <div className="form-group">
              <label>Upload Image:</label>
              <div className="image-upload">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {recipe.image && (
                  <div className="image-preview">
                    <img src={recipe.image} alt="Preview" />
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="create-button">Create Recipe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipes;
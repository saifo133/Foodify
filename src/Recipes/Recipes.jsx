import './Recipes.css';
import {Link} from 'react-router-dom';
import ImageOne from './Pancakes.jpeg';
import ImageTwo from './Pancakes.jpeg';
import ImageThree from './Pancakes.jpeg';
import ImageFour from './Pancakes.jpeg';
/* Recipes Images */
import { DefaulteRecipesInformation } from '../RecipesData/RecipesData';
/* Icon */
import { RecipesIcons } from '../RecipesData/RecipesData';
/* import FavoriteIcon from './FavoriteIcon.svg'; */
/* Hooks */
import { useState } from 'react';
import { useFavorite } from '../FavoriteRecipes/FavoriteContext';
export default function Recipes()
{
    const [searchTerm, setSearchTerm] = useState("");
    const { addFavorite, removeFavorite, isFavorite } = useFavorite(); // استخدام Context

    function toggleFavorite(recipe) {
        if (isFavorite(recipe.id)) {
            removeFavorite(recipe.id);
        } else {
            addFavorite(recipe);
        }
    }

    const filteredRecipes = DefaulteRecipesInformation.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.classification.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <>
            <div className='Recipes-container'>
                <div className='Recipes-Page-Introduction'>
                    <h1><span>Discover</span> a variety of delicious, easy-to-make recipes designed to inspire your cooking</h1>
                    <p>Whether you’re looking for quick weekday meals, healthy options, or something special to impress your guests, you’ll find step-by-step guides and tasty ideas right here.</p>
                </div>
                <div className="image-grid">
                    <div className="img img1" style={{backgroundImage: `url(${ImageOne})`}}></div>
                    <div className="img img2" style={{backgroundImage: `url(${ImageTwo})`}}></div>
                    <div className="img img3" style={{backgroundImage: `url(${ImageThree})`}}></div>
                    <div className="img img4" style={{backgroundImage: `url(${ImageFour})`}}></div>
                </div>
            </div>

            <div className='Bubbles-Search-Create'>
                <div className='Bubbles-search'>
                    <div className='Bubbles'>
                      <div className='bubble Beef' onClick={() => setSearchTerm("Beef")}>
                        <img src={RecipesIcons.Beef} alt='Grilled Steak' />
                      </div>
                      <div className='bubble Chicken' onClick={() => setSearchTerm("Chicken")}>
                        <img src={RecipesIcons.Chicken} alt='Roast Chicken' />
                      </div>
                      <div className='bubble Fish' onClick={() => setSearchTerm("Fish")}>
                        <img src={RecipesIcons.Fish} alt='Baked Salmon' />
                      </div>
                      <div className='bubble Seafood' onClick={() => setSearchTerm("Seafood")}>
                        <img src={RecipesIcons.Seafood} alt='Shrimp Scampi' />
                      </div>
                      <div className='bubble PastaRice' onClick={() => setSearchTerm("Pasta & Rice")}>
                        <img src={RecipesIcons.PastaAndRice} alt='Spaghetti Carbonara' />
                      </div>
                      <div className='bubble Vegetables' onClick={() => setSearchTerm("Vegetables")}>
                        <img src={RecipesIcons.Vegetables} alt='Grilled Veggie Mix' />
                      </div>
                      <div className='bubble LegumesBeans' onClick={() => setSearchTerm("Legumes & Beans")}>
                        <img src={RecipesIcons.LegumesAndBeans} alt='Chickpea Curry' />
                      </div>
                      <div className='bubble Fruits' onClick={() => setSearchTerm("Fruits")}>
                        <img src={RecipesIcons.Fruits} alt='Fruit Salad' />
                      </div>
                      <div className='bubble Eggs' onClick={() => setSearchTerm("Eggs")}>
                        <img src={RecipesIcons.Eggs} alt='Omelette' />
                      </div>
                      <div className='bubble DairyCheese' onClick={() => setSearchTerm("Dairy & Cheese")}>
                        <img src={RecipesIcons.DairyAndCheese} alt='Cheese Platter' />
                      </div>
                      <div className='bubble BreadGrains' onClick={() => setSearchTerm("Bread & Grains")}>
                        <img src={RecipesIcons.BreadAndGrains} alt='Whole Grain Bread' />
                      </div>
                    </div>

                    <div className='search'>
                        <input 
                            type='search' 
                            placeholder='🔍 Search Recipes' 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                        />
                    </div>
                </div>
            </div>

<div className='Recipes'>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((item) => (
                    <div key={item.id} className='card'>
                        <div
                        className='card-image'
                        style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        <div className='card-title'>
                        <h1>{item.title}</h1>
                        <h2>{item.classification}</h2>
                        </div>
                        <p>
                        {item.description.length > 80
                            ? item.description.slice(0, 70) + '...'
                            : item.description}
                        </p>
                        
                        <div className='ShowMore-Favorite'>
                        <Link to={`/recipes/recipesDetails/${item.id}`} className='details-link'>
                            <button className='btn show-more-icon'>
                            Show More
                            </button>
                        </Link>
                        <button 
                            className={`btn favorite-icon ${isFavorite(item.id) ? 'favorited' : ''}`} 
                            onClick={() => toggleFavorite(item)}
                        >
                            <img 
                                className='favoriteIcon' 
                                src={isFavorite(item.id) ? RecipesIcons.FavoriteIconClicked : RecipesIcons.FavoriteIcon}
                                alt='Favorite' 
                            />
                        </button>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className="no-recipes">
                        <p>❌ No recipes found</p>
                    </div>
                )}
            </div>
        </>
    );
}
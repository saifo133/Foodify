import './FavoritePage.css';
import { useFavorite } from './FavoriteContext';
import { RecipesIcons } from '../RecipesData/RecipesData';
import { Link } from 'react-router-dom';

export default function FavoritePage() {
    const { favorites, removeFavorite } = useFavorite();

    return (
        <div className="favorite-page">
            <div className="favorite-header">
                <h1>Your Favorite Recipes</h1>
                <p>You have {favorites.length} favorite recipes</p>
            </div>

            {favorites.length > 0 ? (
                <div className='Recipes'>
                    {favorites.map((item) => (
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
                                        <img className='showMoreIcon' src={RecipesIcons.ShowMoreIcon} alt='Show more' />
                                    </button>
                                </Link>
                                <button 
                                    className='btn favorite-icon favorited' 
                                    onClick={() => removeFavorite(item.id)}
                                >
                                    <img 
                                        className='favoriteIcon' 
                                        src={RecipesIcons.FavoriteIconClicked}
                                        alt='Remove from favorites' 
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-favorites">
                    <p>You don't have any favorite recipes yet.</p>
                    <Link to="/recipes">Browse recipes</Link>
                </div>
            )}
        </div>
    );
}
import './Suggest.css';
import { Link } from 'react-router-dom';
import { SuggestData } from '../SuggestData/SuggestData';

export default function Suggest() {
  return (
    <div className='Suggest-container'>
      <h1>Breakfast Delights</h1>
      <p>Start your day with energy and flavor!</p>

      <div className="suggest-recipes">
        {SuggestData.map((item) => (
          <div className='recipes' key={item.id}>
            <div
              className='recipe-image'
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <p className='recipe-title'>{item.title}</p>
            <p className='recipte-description'>{item.description}</p>
            <Link to={`/suggest/RecipesDetails/${item.id}`}>
              <button>Show More</button>
            </Link>
          </div>
        ))}
      </div>

      <h3 className='finish-suggest-text'>"Start strong, eat well!"</h3>
    </div>
  );
}

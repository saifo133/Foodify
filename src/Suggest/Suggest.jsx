import './Suggest.css';
import Shukshoka from './Shukshoka.jpeg';
import Avocado_Toast from './Avocado_Toast.jpeg';
import Pancakes from './Pancakes.jpeg';
export default function Suggest()
{
    const Suggest = [
    {
        id: 1,
        image :Shukshoka ,
        title: "Shakshuka",
        description: "Eggs gently poached in a rich, spiced tomato sauce with onions, peppers, and garlic, served hot with warm crusty bread."
    },
    {
        id: 2,
        image: Avocado_Toast ,
        title: "Avocado Toast",
        description: "Crispy toasted bread topped with creamy mashed avocado, a drizzle of lemon juice, a sprinkle of sea salt and black pepper, and finished with cherry tomato slices."
    },
    {
        id: 3,
        image: Pancakes,
        title: "Pancakes",
        description: "Light and fluffy pancakes stacked high, drizzled with golden maple syrup, and topped with fresh seasonal berries for a sweet and satisfying start to the day."
    }
    ];


    return(
        <div className='Suggest-container'>
            <h1>Breakfast Delights</h1>
            <p>Start your day with energy and flavor !</p>

            <div className="suggest-recipes">
                {Suggest.map((item) => {
                    return <div className='recipes' key={item.id}>
                    <div className='recipe-image' style={{ backgroundImage: `url(${item.image})`}}></div>
                    <p className='recipe-title'>{item.title}</p>
                    <p className='recipte-description'>{item.description}</p>
                    <button>Show More</button>
                </div>
                })}
            </div>

            <h3 className='finish-suggest-text'>"Start strong, eat well!"</h3>
        </div>
    );
}
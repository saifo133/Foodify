import './Highlights.css';
import book from './book-svgrepo-com.svg';
import chefHat from './chef-hat-svgrepo-com.svg';
import favorite from './favorite-filled-svgrepo-com.svg';
import restaurant from './food-restaurant-svgrepo-com.svg';
import kitchen from './kitchen-pack-cooker-svgrepo-com.svg';
export default function Highlights()
{
    const Highlights = [
        {id : 1 , icon: book, description: 'Discover hundreds of delicious recipes in one place, ready to explore anytime'},
        {id : 2 , icon: chefHat, description: 'Get cooking tips and tricks from expert chefs to make your meals perfect'},
        {id : 3 , icon: favorite , description: 'Save your favorite recipes for quick access whenever you need them'},
        {id : 4 , icon: restaurant , description: 'Enjoy a wide variety of dishes from breakfast to dinner, all in one app'},
        {id : 5 , icon: kitchen , description: 'Turn your kitchen into a creative space with easy-to-follow step-by-step guides'},
    ]
    return(
        <div className='Highlights-container'>
            {Highlights.map((item) => {
                return <div className='Features' key={item.id}>
                    <img src={item.icon} alt='feature icon' />
                    <p>{item.description}</p>        
            </div>
            })}
        </div>
    );
}
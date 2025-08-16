import './Introduction.css';
export default function Introduction()
{
    return(
        <>
        <div className="Introduction">

            <div className='Introduction-title'>
            <h1><span>Foodify</span> is your place for recipes.</h1>
            </div>

            <div className="Introduction-text">
            <p>Discover, Cook, and Savor the Flavors of the World! From quick snacks to gourmet meals, Foodify brings you handpicked recipes tailored to your taste. Explore thousands of dishes, save your favorites, and start your delicious journey today.</p>
            </div>

            <div className="Introduction-btn">
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
            </div>
        </div>
        </>
    );
}
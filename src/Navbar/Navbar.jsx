import './Navbar.css';
import {Link} from 'react-router-dom';
export default function Navbar()
{
    return(
        <nav>
            <h1 className='logo'>Foodify</h1>

            <ul className='navbar-links'>
                <li>
                    <Link to='/' className='navbar-item'>Home</Link>
                </li>
                <li>
                    <Link to='/recipes' className='navbar-item'>Recipes</Link>
                </li>
                <li>
                    <Link to='/favorites' className='navbar-item'>Favorites</Link>
                </li>
                <li>
                    <Link to='/about' className='navbar-item'>About</Link>
                </li>
            </ul>
        </nav>
    );
}
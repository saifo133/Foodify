import './Footer.css';
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <div className='footer-container'>
            <div className="logo">
                <h1>Foodify</h1>
            </div>

            <div className="nav-sections">
                <ul className='navbar-links'>
                <p>Sections :</p>
                <li>
                    <Link to='/' className='navbar-item'>Home</Link>
                </li>
                <li>
                    <Link to='/recipes' className='navbar-item'>Recipes</Link>
                </li>
                <li>
                    <Link to='/favorite' className='navbar-item'>Favorites</Link>
                </li>
                <li>
                    <Link to='/my-recipes' className='navbar-item'>My Recipes</Link>
                </li>
                <li>
                    <Link to='/about' className='navbar-item'>About</Link>
                </li>
            </ul>
            </div>

            <div className="our-vision">
                <p className='title'>Our Vision :</p>
                <p className='our-vision-desrciption'>To inspire every home with the joy of cooking by providing easy, delicious, and beautifully crafted recipes for all food lovers.</p>
            </div>
        </div>
    );
}
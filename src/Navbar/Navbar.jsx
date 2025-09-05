import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <nav>
      <h1 className='logo'>Foodify</h1>

      {/* زر القائمة للشاشات الصغيرة */}
      <div className='menu-icon' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to='/' className='navbar-item' onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to='/recipes' className='navbar-item' onClick={() => setIsMenuOpen(false)}>Recipes</Link>
        </li>
        <li>
          <Link to='/favorite' className='navbar-item' onClick={() => setIsMenuOpen(false)}>Favorites</Link>
        </li>
        <li>
          <Link to='/my-recipes' className='navbar-item' onClick={() => setIsMenuOpen(false)}>My Recipes</Link>
        </li>
        <li>
          <Link to='/about' className='navbar-item' onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
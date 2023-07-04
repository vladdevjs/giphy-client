import { Link } from 'react-router-dom';

function Navbar({ onRandomClick }) {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar__item'>
        Поиск
      </Link>
      <Link to='/trending' className='navbar__item'>
        В тренде
      </Link>
      <Link to='/random' className='navbar__item' onClick={onRandomClick}>
        Мне повезет
      </Link>
      <Link to='/favourites' className='navbar__item'>
        Избранное
      </Link>
    </nav>
  );
}

export default Navbar;

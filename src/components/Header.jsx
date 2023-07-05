import LogoDark from './LogoDark';
import LogoLight from './LogoLight';

function Header({ lightTheme }) {
  console.log(lightTheme);
  return (
    <header className='header'>
      <div className='header__logo'>{lightTheme ? <LogoLight /> : <LogoDark />}</div>
    </header>
  );
}

export default Header;

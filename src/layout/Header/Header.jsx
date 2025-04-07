import './Header.scss';
import Logo from '@/components/Logo/index';

const Header = () => {

  return (
    <header className="header">
      <div className="header__iner container">
        <Logo loading="eager"/>
      </div>
    </header>
  );
};

export default Header;
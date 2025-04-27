import './Header.scss';
import Logo from '@/components/Logo/index';
import classNames from 'classnames';
import Button from '@/components/Button';
import BurgerButton from '@/components/BurgerButton';

const menuItems = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Courses',
    path: '/courses'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Pricing',
    path: '/pricing'
  },
  {
    label: 'Contact',
    path: '/contact'
  }
];

const Header = ({ url }) => {

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo loading="eager"/>
        <dialog className="header__dialog-overlay">
          <nav className="header__navigation">
            <ul className="header__menu-list">
              {
                menuItems.map(({ label, path }, index) => (
                  <li
                    key={index}
                    className="header__menu-item"
                  >
                    <a
                      href={path}
                      className={classNames('header__menu-link', {
                        'is-active': path === url
                      })}
                    >{label}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </dialog>
        <div className="header__actions">
          <Button
            label="Sign up"
            mode="transparent"
            className="header__sign-up-button"
          />
          <Button
            label="Log in"
            className="header__login-button"
          />
          <BurgerButton className="header__burger-button visible-tablet"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
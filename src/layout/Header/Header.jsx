import './Header.scss';
import Logo from '@/components/Logo/index';
import classNames from 'classnames';
import Button from '@/components/Button';

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
        <dialog open className="header__dialog">
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
          />
          <Button
            label="Log in"
            className="header__login-button"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
import './Footer.scss';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <address className="footer__contacts">
          <Logo />
          <ul className="footer__contacts-list">
            <li className="footer__contacts-item">
              <Icon
                name="letter"
                hasFill
                className="footer__contacts-icon"
              />
              <a href="mailto:hello@skillbridge.com" className="footer__contacts-link">
                hello@skillbridge.com
              </a>
            </li>
            <li className="footer__contacts-item">
              <Icon
                name="phone"
                hasFill
                className="footer__contacts-icon"
              />
              <a href="tel:1234567890" className="footer__contacts-link">
                123-456-7890
              </a>
            </li>
            <li className="footer__contacts-item">
              <Icon
                name="location"
                hasFill
                className="footer__contacts-icon"
              />
              Somewhere in the World
            </li>
          </ul>
        </address>
      </div>
      <div className="footer__copyright">
        {/* TODO: Fix whitespaces in copyright text */}
        &copy; <time dateTime="2025">2025</time> Skillbridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
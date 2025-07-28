import './Footer.scss';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';
import Socials from '@/components/Socials/Socials';

const menuItems = [
  {
    title: 'Home',
    links: [
      { label: 'Benefits', path: '/benefits' },
      { label: 'Courses', path: '/courses' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'FAQ', path: '/faq' }
    ]
  },
  {
    title: 'About us',
    links: [
      { label: 'Company', path: '/company' },
      { label: 'Achievements', path: '/achievements' },
      { label: 'Goal', path: '/goal' }
    ]
  },
  {
    title: 'Socials',
    socialLinks: [
      {
        label: 'Facebook',
        name: 'facebook',
        url: 'https://www.facebook.com/'
      },
      {
        label: 'Twitter',
        name: 'twitter',
        url: 'https://x.com/'
      },
      {
        label: 'LinkedIn',
        name: 'linkedin',
        url: 'https://www.linkedin.com/'
      }
    ]
  }
];

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
        <nav className="footer__menu">
          {
            menuItems.map(({ title, links, socialLinks }, index) => (
              <div className="footer__menu-column" key={index}>
                <a href="/" className="footer__menu-title h4">{title}</a>
                {
                  links && (
                    <ul className="footer__menu-list">
                      {
                        links.map(({ label, path }, index) => (
                          <li className="footer__menu-item" key={index}>
                            <a href={path} className="footer__menu-link">{label}</a>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
                {
                  socialLinks && <Socials items={socialLinks}/>
                }
              </div>
            ))
          }
        </nav>
      </div>
      <div className="footer__copyright">
        {/* TODO: Fix whitespaces in copyright text */}
        &copy; <time dateTime="2025">2025</time> Skillbridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
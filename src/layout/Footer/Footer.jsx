import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__contacts">

        </div>
      </div>
      <div className="footer__copyright">
        {/* TODO: Fix whitespaces in copyright text */}
        &#169; <time dateTime="2025">2025</time> Skillbridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
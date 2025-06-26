import './WelcomeBanner.scss';
import Icon from '@/components/Icon/index.js';
import Button from '@/components/Button';

const WelcomeBanner = () => {
  return (
    <section className="welcome-banner container">
      <header className="welcome-banner__header">
        <h1 className="welcome-banner__title">
          <p className="welcome-banner__heading">
            <span className="welcome-banner__icon-wrapper">
              <Icon
                name="lightning"
                hasFill={true}
              />
            </span>
            <span className="welcome-banner__heading--accented">Unlock</span>
            &nbsp;Your Creative Potential
          </p>
          <p className="welcome-banner__subheading">with Online Design and Development Courses.</p>
        </h1>
        <div className="welcome-banner__info">
          <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
      </header>
      <div className="welcome-banner__actions">
        <Button
          label="Explore Courses"
          href="/courses"
          mode="primary"
          className="welcome-banner__explore-btn"
        />
        <Button
          label="View Pricing"
          href="/pricing"
          mode="white"
          className="welcome-banner__pricing-btn"
        />
      </div>
    </section>
  );
};

export default WelcomeBanner;
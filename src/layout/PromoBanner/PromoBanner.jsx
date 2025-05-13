import './PromoBanner.scss';
import Icon from '@/components/Icon';

const PromoBanner = () => {


  return (
    <div className="promo-banner-container">
      <div className="promo-banner">
        <a
          className="promo-banner__link"
          href="/courses">
          Free Courses 🌟 Sale Ends Soon, Get It Now
          <Icon
            name="arrow-right"
            hasFill={true}
            className="promo-banner__icon"
          />
        </a>
      </div>
    </div>
  );
};

export default PromoBanner;
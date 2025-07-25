import './Partners.scss';
import Icon from '@/components/Icon';

const partners = [
  'zapier',
  'spotify',
  'zoom', 
  'amazon', 
  'adobe', 
  'notion', 
  'netflix'
];

const Partners = () => {

  return (
    <section className="partners container">
      <ul className="partners__list">
        {
          partners.map((partnerName, index) => (
            <li
              className="partners__item"
              key={index}
            >
              <Icon
                name={partnerName}
                className="partners__item-logo"
                hasFill
              />
            </li>
          )) 
        }
      </ul>
    </section>
  );
};

export default Partners;
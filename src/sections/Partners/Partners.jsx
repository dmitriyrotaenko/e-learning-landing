import './Partners.scss';

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
              <img
                className="partners__item-logo"
                src={`/partners/${partnerName}.svg`}
                alt={`${partnerName} logo`}
                width={56}
                height={28}
              />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Partners;
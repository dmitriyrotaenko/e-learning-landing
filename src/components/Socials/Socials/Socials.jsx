import './Socials.scss';
import classNames from 'classnames';
import Button from '@/components/Button';

const Socials = (props) => {
  const {
    items,
    className
  } = props;


  return (
    <div className={classNames(className, 'soc1als')}>
      <ul className="soc1als__list">
        {
          items.map(({ label, name, url }) => (
            <li key={name} className="soc1als__item">
              <Button
                label={label}
                mode="white-97"
                isLabelVisible={false}
                href={url}
                target="_blank"
                iconName={name}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Socials;
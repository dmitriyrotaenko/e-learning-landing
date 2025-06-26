import './Logo.scss';
import classNames from 'classnames';

const Logo = props => {

  const { className, loadingStrategy = 'lazy' } = props;

  return (
    <a
      className={classNames(className, 'logo')}
      href='/'
    >
      <img
        src='/logo.svg'
        width={54}
        height={54}
        className='logo__image'
        alt=""
        loading={loadingStrategy}
      />
    </a>
  );
};

export default Logo;
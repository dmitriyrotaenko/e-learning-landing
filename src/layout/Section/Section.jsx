import './Section.scss';
import classNames from 'classnames';

const Section = (props) => {

  const {
    className,
    children,
    title,
    description,
    actions
  } = props;

  return (
    <section className={classNames('section container', className)}>
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title">{title}</h2>
          { description && <p className="section__description">{description}</p> }
        </div>
        { actions && <div className="section__actions"></div> }
      </header>
      <div className="section__content">
        { children }
      </div>
    </section>
  );
};

export default Section;
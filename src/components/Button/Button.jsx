import './Button.scss';
import classNames from 'classnames';

const Button = props => {
  const {
    className,
    label,
    isLabelVisible = true,
    type = 'button',
    /*
    * no value: default button with background
    * transparent
    * white
    * */
    mode,
    href,
    target
  } = props;

  const Component = href ? 'a' : 'button';
  const isLink = href !== undefined;
  const linkProps = { href, target };
  const buttonProps = { type };

  const elementProps = isLink ? linkProps : buttonProps;

  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode
      })}
      {...elementProps}
    >
      {
        isLabelVisible && (
          <span>{label}</span>
        )
      }
    </Component>
  );
};

export default Button;
import './Button.scss';
import classNames from 'classnames';
import Icon from '@/components/Icon';

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
    * white-97
    * */
    mode,
    href,
    target,
    iconName,
    iconBeforeText = true,
    hasFill = true
  } = props;

  const Component = href ? 'a' : 'button';
  const isLink = href !== undefined;
  const linkProps = { href, target };
  const buttonProps = { type };

  const elementProps = isLink ? linkProps : buttonProps;

  const IconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      hasFill={hasFill}
    />
  );

  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode
      })}
      {...elementProps}
    >
      {iconBeforeText && IconComponent}
      {
        isLabelVisible && (
          <span className="button__label">{label}</span>
        )
      }
    </Component>
  );
};

export default Button;
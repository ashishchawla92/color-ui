import { forwardRef } from 'react';
import styles from './Button.module.scss';
import classnames from 'classnames';

interface IButtonProps {
  color?: string;
  isLight?: boolean;
  isOutlined?: boolean;
  size?: 'default' | 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ color = 'primary', isLight, isOutlined, size = 'default', children, ...otherProps }, ref) => {
    const colorName = `${color?.charAt(0).toUpperCase()}${color?.slice(1)}`;

    const classes = classnames({
      [styles.Button]: true,
      [styles[`is${colorName}`]]: color,
      [styles[`is${size}`]]: size,
      [styles.isLight]: isLight,
    });

    return (
      <>
        <button ref={ref} className={classes} {...otherProps}>
          {children}
        </button>
      </>
    );
  }
);

export default Button;

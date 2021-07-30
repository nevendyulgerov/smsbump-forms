import React, { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';
import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: 'primary' | 'secondary';
  className?: string;
  outlined?: boolean;
  borderless?: boolean;
}

interface ButtonComponents {
  Group: FC<ButtonGroupProps>;
}

const Button: FC<ButtonProps> & ButtonComponents = (props) => {
  const {
    children,
    color,
    className,
    outlined = false,
    borderless = false,
    ...restProps
  } = props;

  return (
    <button
      {...restProps}
      className={classNames({
        button: true,
        [`button--${color}`]: true,
        'button--outlined': outlined,
        'button--borderless': borderless,
        [className as string]: typeof className === 'string'
      })}
    >
      {children}
    </button>
  );
};

Button.Group = ButtonGroup;

export default Button;

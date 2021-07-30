import React, { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.css';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon: string;
  className?: string;
}

const ThemeButton: FC<ThemeButtonProps> = (props) => {
  const { children, icon, className, ...restProps } = props;
  const hasChildren = typeof children === 'object'
    || typeof children === 'string';

  return (
    <button
      {...restProps}
      className={classNames({
        'theme-button': true,
        [className as string]: typeof className === 'string'
      })}
    >
      <div className="theme-button__icon-container">
        <img
          src={icon}
          alt="button-icon"
          className="theme-button__icon"
        />
      </div>

      {hasChildren && (
        <span className="theme-button__text">
          {children}
        </span>
      )}
    </button>
  );
};

export default ThemeButton;

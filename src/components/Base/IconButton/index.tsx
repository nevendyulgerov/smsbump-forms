import React, { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon: string;
  className?: string;
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { children, icon, className, ...restProps } = props;
  const hasChildren = typeof children === 'object'
    || typeof children === 'string';

  return (
    <button
      {...restProps}
      className={classNames({
        'icon-button': true,
        [className as string]: typeof className === 'string'
      })}
    >
      <div className="icon-button__icon-container">
        <img
          src={icon}
          alt="button-icon"
          className="icon-button__icon"
        />
      </div>

      {hasChildren && (
        <span className="icon-button__text">
          {children}
        </span>
      )}
    </button>
  );
};

export default IconButton;

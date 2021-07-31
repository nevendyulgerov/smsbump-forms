import React, { FC, HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.css';
import Icon from '../Icon';

interface DropdownProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={classNames({
        dropdown: true,
        [className as string]: typeof className === 'string'
      })}
    >
      <button className="dropdown__button">
        <span className="dropdown__button-text">
          {children}
        </span>

        <Icon id="chevron-down" />
      </button>
    </div>
  );
};

export default Dropdown;

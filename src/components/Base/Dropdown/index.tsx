import React, { FC, HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';
import chevronDownIcon from '../../../assets/icons/chevron-down.svg';
import './index.css';

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

        <img
          src={chevronDownIcon}
          alt="button-arrow-icon"
          className="dropdown__button-icon"
        />
      </button>
    </div>
  );
};

export default Dropdown;

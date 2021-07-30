import React, { FC, HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.css';

export interface ButtonGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={classNames({
        'button-group': true,
        [className as string]: typeof className === 'string'
      })}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;

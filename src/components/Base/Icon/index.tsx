import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import iconsSprite from '../../../assets/icons/sprite.svg';
import './index.css';

interface IconProps extends HTMLAttributes<SVGElement> {
  id: string;
  className?: string | undefined;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { id, className = undefined, ...restProps } = props;

  return (
    <svg
      {...restProps}
      className={classNames({
        icon: true,
        [className as string]: typeof className === 'string'
      })}
    >
      <use xlinkHref={`${iconsSprite}#${id}`} />
    </svg>
  );
};

export default Icon;

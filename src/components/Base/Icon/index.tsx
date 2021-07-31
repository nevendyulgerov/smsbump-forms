import React from 'react';
import classNames from 'classnames';
import iconsSprite from '../../../assets/icons/sprite.svg';
import './index.css';

const Icon: React.FunctionComponent<{
  id: string;
  className?: string | null;
  [key: string]: unknown;
}> = (props) => {
  const { id, className, ...restProps } = props;

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

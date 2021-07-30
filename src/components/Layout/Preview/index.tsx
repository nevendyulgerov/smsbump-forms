import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { AppContext } from '../../../context';
import './index.css';

const Preview: FC = () => {
  const [state] = useContext(AppContext);

  return (
    <div
      className={classNames({
        preview: true,
        [`preview--${state.device}`]: true
      })}
    >
      <div className="preview__container">
        <img
          src={state.theme.icon}
          alt={state.theme.name}
        />
      </div>
    </div>
  );
};

export default Preview;

import React, { FC, useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { AppContext } from '../../../context';
import './index.css';

const Preview: FC = () => {
  const [state] = useContext(AppContext);
  const refComponent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.isSideMenuActive && refComponent.current !== null) {
      refComponent.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      })
    }
  }, [state.isSideMenuActive])

  return (
    <div
      ref={refComponent}
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

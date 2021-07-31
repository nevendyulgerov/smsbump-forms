import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { AppContext } from '../../../context';
import './index.css';

const SideMenu: FC<{
  children: React.ReactNode | React.ReactNodeArray;
}> = ({ children }) => {
  const [state] = useContext(AppContext);

  return (
    <div
      className={classNames({
        'side-menu': true,
        'side-menu--active': state.isSideMenuActive
      })}
    >
      {children}
    </div>
  );
};

export default SideMenu;

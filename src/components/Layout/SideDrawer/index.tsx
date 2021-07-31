import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { AppContext } from '../../../context';
import './index.css';

const SideDrawer: FC<{
  children: React.ReactNode | React.ReactNodeArray;
}> = ({ children }) => {
  const [state] = useContext(AppContext);

  return (
    <div
      className={classNames({
        'side-drawer': true,
        'side-drawer--active': state.isSideMenuActive
      })}
    >
      {children}
    </div>
  );
};

export default SideDrawer;

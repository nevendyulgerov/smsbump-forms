import React, { FC } from 'react';
import './index.css';

const SideMenu: FC<{
  children: React.ReactNode | React.ReactNodeArray;
}> = ({ children }) => (
  <div className="side-menu">
    {children}
  </div>
);

export default SideMenu;

import React, { FC } from 'react';
import './index.css';

const Body: FC<{
  children: React.ReactNode | React.ReactNodeArray;
}> = ({ children }) => (
  <div className="body">
    {children}
  </div>
);

export default Body;

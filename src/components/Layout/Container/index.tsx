import React, { FC } from 'react';
import './index.css';

const Container: FC<{
  children: React.ReactNode | React.ReactNodeArray;
}> = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

export default Container;

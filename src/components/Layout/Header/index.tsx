import React, { FC } from 'react';
import logoIcon from '../../../assets/icons/logo.svg';
import penIcon from '../../../assets/icons/pen.svg';
import exitIcon from '../../../assets/icons/exit.svg';
import { Dropdown, IconButton } from '../../Base';
import './index.css';

const Header: FC = () => (
  <div className="header">
    <div className="header__col">
      <img
        src={logoIcon}
        alt="logo"
        className="header__logo"
      />

      <div className="header__separator" />

      <IconButton icon={penIcon}>
        Form 1
      </IconButton>
    </div>

    <div className="header__col">
      <Dropdown>
        Draft
      </Dropdown>

      <div className="header__separator" />

      <IconButton icon={exitIcon}>
        Exit
      </IconButton>
    </div>
  </div>
);

export default Header;

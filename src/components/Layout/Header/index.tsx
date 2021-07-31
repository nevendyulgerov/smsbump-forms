import React, { FC } from 'react';
import logoIcon from '../../../assets/icons/logo.svg';
import { Dropdown, Icon, IconButton } from '../../Base';
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

      <IconButton
        icon={<Icon id="pen" />}
        className="header__button"
      >
        Form 1
      </IconButton>
    </div>

    <div className="header__col">
      <Dropdown>
        Draft
      </Dropdown>

      <div className="header__separator" />

      <IconButton
        icon={<Icon id="exit" />}
        className="header__button"
      >
        Exit
      </IconButton>
    </div>
  </div>
);

export default Header;

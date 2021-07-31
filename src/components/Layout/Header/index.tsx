import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import logoIcon from '../../../assets/icons/logo.svg';
import { Dropdown, Icon, IconButton } from '../../Base';
import messages from './messages';
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
        <FormattedMessage
          {...messages.formCount}
          values={{ count: 1}}
        />
      </IconButton>
    </div>

    <div className="header__col">
      <Dropdown>
        <FormattedMessage {...messages.draft} />
      </Dropdown>

      <div className="header__separator" />

      <IconButton
        icon={<Icon id="exit" />}
        className="header__button"
      >
        <FormattedMessage {...messages.exit} />
      </IconButton>
    </div>
  </div>
);

export default Header;

import React, { FC, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import mainMenuItems from '../../../config/mainMenuItems';
import { setMainMenuItem, toggleSideMenu } from '../../../context/actions';
import { AppContext } from '../../../context';
import { Icon, IconButton } from '../../Base';
import messages from './messages';
import './index.css';

const MainMenu: FC = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="main-menu">
      {mainMenuItems.map((mainMenuItem, index) => (
        <IconButton
          key={mainMenuItem.name}
          icon={<Icon id={mainMenuItem.icon} />}
          className={classNames({
            'main-menu__button': true,
            'main-menu__button--active': mainMenuItem.name === state.mainMenuItem?.name
          })}
          onClick={() => {
            setMainMenuItem(dispatch)(mainMenuItem);

            const nextIsThemeMenuActive = mainMenuItem.name === 'theme'
              && !state.isSideMenuActive;

            toggleSideMenu(dispatch)(nextIsThemeMenuActive);
          }}
        >
          <FormattedMessage {...messages[mainMenuItem.name]} />
        </IconButton>
      ))}
    </div>
  );
};

export default MainMenu;

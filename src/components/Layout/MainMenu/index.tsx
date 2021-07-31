import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import mainMenuItems from '../../../config/mainMenuItems';
import { setMainMenuItem, toggleThemeMenu } from '../../../context/actions';
import { AppContext } from '../../../context';
import { Icon, IconButton } from '../../Base';
import './index.css';

const MainMenu: FC = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="main-menu">
      {mainMenuItems.map((mainMenuItem, index) => (
        <IconButton
          key={mainMenuItem.name}
          icon={<Icon id={mainMenuItem.name} />}
          className={classNames({
            'main-menu__button': true,
            'main-menu__button--active': mainMenuItem.name === state.mainMenuItem?.name
          })}
          onClick={() => {
            setMainMenuItem(dispatch)(mainMenuItem);
            toggleThemeMenu(dispatch)(
              mainMenuItem.name === 'theme' && !state.isThemeMenuActive
            );
          }}
        >
          {mainMenuItem.label}
        </IconButton>
      ))}
    </div>
  );
};

export default MainMenu;

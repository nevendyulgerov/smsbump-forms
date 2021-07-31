import React, { FC, useContext } from 'react';
import themeMenuItems from '../../../config/themeMenuItems';
import { AppContext } from '../../../context';
import { setTheme } from '../../../context/actions';
import { ThemeButton } from '../../Base';
import './index.css';

const ThemeMenu: FC = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="theme-menu">
      {themeMenuItems.map((themeMenuItem, index) => (
        <ThemeButton
          key={`${themeMenuItem.name}-${themeMenuItem.steps}`}
          icon={themeMenuItem.icon}
          className="theme-menu__button"
          onClick={() => setTheme(dispatch)(themeMenuItem)}
        >
          <span className="theme-menu__button-label">This form has </span>
          <span className="theme-menu__button-steps">
            {themeMenuItem.steps} steps
          </span>

          {themeMenuItem.name === state.theme.name
            && themeMenuItem.steps === state.theme.steps && (
              <span className="theme-menu__selected">
                Selected
              </span>
            )}
        </ThemeButton>
      ))}
    </div>
  );
};

export default ThemeMenu;

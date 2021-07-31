import React, { FC, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import themeMenuItems from '../../../config/themeMenuItems';
import { AppContext } from '../../../context';
import { setTheme } from '../../../context/actions';
import { ThemeButton } from '../../Base';
import './index.css';
import messages from './messages';

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
          <span className="theme-menu__button-label">
            <FormattedMessage
              {...messages.thisFormHasAttribute}
              values={{
                attribute: (
                  <span className="theme-menu__button-steps">
                    <FormattedMessage
                      {...messages.countSteps}
                      values={{ count: themeMenuItem.steps }}
                    />
                  </span>
                )
              }}
            />
          </span>

          {themeMenuItem.name === state.theme.name
            && themeMenuItem.steps === state.theme.steps && (
              <span className="theme-menu__selected">
                <FormattedMessage {...messages.selected} />
              </span>
            )}
        </ThemeButton>
      ))}
    </div>
  );
};

export default ThemeMenu;

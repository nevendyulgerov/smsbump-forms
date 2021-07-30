import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import deviceMenuItems from '../../../config/deviceMenuItems';
import { AppContext } from '../../../context';
import { setDevice } from '../../../context/actions';
import { IconButton } from '../../Base';
import './index.css';

const DeviceMenu: FC = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="device-menu">
      {deviceMenuItems.map(deviceMenuItem => {
        const isActive = deviceMenuItem.name === state.device;

        return (
          <IconButton
            key={deviceMenuItem.name}
            icon={isActive ? deviceMenuItem.highlightedIcon : deviceMenuItem.icon}
            className={classNames({
              'device-menu__button': true,
              'device-menu__button--active': isActive
            })}
            title={deviceMenuItem.label}
            onClick={() => setDevice(dispatch)(deviceMenuItem.name)}
          />
        );
      })}
    </div>
  );
};

export default DeviceMenu;

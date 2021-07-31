import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import deviceMenuItems from '../../../config/deviceMenuItems';
import { AppContext } from '../../../context';
import { setDevice } from '../../../context/actions';
import { Icon, IconButton } from '../../Base';
import './index.css';

const DeviceMenu: FC = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="device-menu">
      {deviceMenuItems.map(deviceMenuItem => (
        <IconButton
          key={deviceMenuItem.name}
          icon={<Icon id={deviceMenuItem.name} />}
          className={classNames({
            'device-menu__button': true,
            'device-menu__button--active': deviceMenuItem.name === state.device
          })}
          title={deviceMenuItem.label}
          onClick={() => setDevice(dispatch)(deviceMenuItem.name)}
        />
      ))}
    </div>
  );
};

export default DeviceMenu;

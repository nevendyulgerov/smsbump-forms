import React, { FC, useContext } from 'react';
import deviceMenuItems from '../../../config/deviceMenuItems';
import { AppContext } from '../../../context';
import { setDevice } from '../../../context/actions';
import { IconButton } from '../../Base';
import './index.css';

const DeviceMenu: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="device-menu">
      {deviceMenuItems.map(deviceMenuItem => (
        <IconButton
          key={deviceMenuItem.name}
          icon={deviceMenuItem.icon}
          className="device-menu__button"
          title={deviceMenuItem.label}
          onClick={() => setDevice(dispatch)(deviceMenuItem.name)}
        />
      ))}
    </div>
  );
};

export default DeviceMenu;

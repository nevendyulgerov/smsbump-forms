import { DeviceMenuItem } from '../interfaces/menu';
import desktopIcon from '../assets/icons/desktop.svg';
import tabletIcon from '../assets/icons/tablet.svg';
import phoneIcon from '../assets/icons/phone.svg';

const deviceMenuItems: DeviceMenuItem[] = [{
  name: 'desktop',
  label: 'View desktop design',
  icon: desktopIcon
}, {
  name: 'tablet',
  label: 'View tablet design',
  icon: tabletIcon
}, {
  name: 'phone',
  label: 'View phone design',
  icon: phoneIcon
}];

export default deviceMenuItems;

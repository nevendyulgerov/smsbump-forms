import { DeviceMenuItem } from '../interfaces/menu';
import desktopIcon from '../assets/icons/desktop.svg';
import desktopHighlightedIcon from '../assets/icons/desktop-highlighted.svg';
import tabletIcon from '../assets/icons/tablet.svg';
import tabletHighlightedIcon from '../assets/icons/tablet-highlighted.svg';
import phoneIcon from '../assets/icons/phone.svg';
import phoneHighlightedIcon from '../assets/icons/phone-highlighted.svg';

const deviceMenuItems: DeviceMenuItem[] = [{
  name: 'desktop',
  label: 'View desktop design',
  icon: desktopIcon,
  highlightedIcon: desktopHighlightedIcon
}, {
  name: 'tablet',
  label: 'View tablet design',
  icon: tabletIcon,
  highlightedIcon: tabletHighlightedIcon
}, {
  name: 'phone',
  label: 'View phone design',
  icon: phoneIcon,
  highlightedIcon: phoneHighlightedIcon
}];

export default deviceMenuItems;

import { MainMenuItem as MainMenuItemType, ThemeMenuItem as ThemeMenuItemType } from '../types/menu';
import { Device } from '../types/device';

export interface MainMenuItem {
  name: MainMenuItemType;
  icon: string;
}

export interface DeviceMenuItem {
  name: Device,
  label: string;
}

export interface ThemeMenuItem {
  name: ThemeMenuItemType;
  steps: number;
  icon: string;
}

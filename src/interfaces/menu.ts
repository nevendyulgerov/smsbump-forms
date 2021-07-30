import { MainMenuItem as MainMenuItemType, ThemeMenuItem as ThemeMenuItemType } from '../types/menu';
import { Device } from '../types/device';

export interface MainMenuItem {
  name: MainMenuItemType;
  label: string;
  icon: string;
  highlightedIcon: string;
}

export interface DeviceMenuItem {
  name: Device,
  label: string;
  icon: string;
  highlightedIcon: string;
}

export interface ThemeMenuItem {
  name: ThemeMenuItemType;
  steps: number;
  icon: string;
}

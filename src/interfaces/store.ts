import { Device } from '../types/device';
import { MainMenuItem, ThemeMenuItem } from './menu';

export interface Store {
  theme: ThemeMenuItem;
  device: string;
  mainMenuItem: MainMenuItem | null;
  isThemeMenuActive: boolean;
}

export interface SetThemeAction {
  type: string;
  theme: ThemeMenuItem;
}

export interface SetDeviceAction {
  type: string;
  device: Device;
}

export interface SetMainMenuItemAction {
  type: string;
  mainMenuItem: MainMenuItem | null;
}

export interface ToggleThemeMenuAction {
  type: string,
  isThemeMenuActive: boolean;
}

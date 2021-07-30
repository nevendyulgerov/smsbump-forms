import { Dispatch } from 'react';
import { SetDeviceAction, SetMainMenuItemAction, SetThemeAction, ToggleThemeMenuAction } from '../interfaces/store';
import { MainMenuItem, ThemeMenuItem } from '../interfaces/menu';
import { Device } from '../types/device';
import {
  SET_DEVICE,
  SET_MAIN_MENU_ITEM,
  SET_THEME,
  TOGGLE_THEME_MENU
} from './types';

export const setTheme = (dispatch: Dispatch<SetThemeAction>) => (theme: ThemeMenuItem) => (
  dispatch({
    type: SET_THEME,
    theme
  })
);

export const setDevice = (dispatch: Dispatch<SetDeviceAction>) => (device: Device) => (
  dispatch({
    type: SET_DEVICE,
    device
  })
);

export const setMainMenuItem = (dispatch: Dispatch<SetMainMenuItemAction>) => (mainMenuItem: MainMenuItem | null) => (
  dispatch({
    type: SET_MAIN_MENU_ITEM,
    mainMenuItem
  })
);

export const toggleThemeMenu = (dispatch: Dispatch<ToggleThemeMenuAction>) => (isThemeMenuActive: boolean) => (
  dispatch({
    type: TOGGLE_THEME_MENU,
    isThemeMenuActive
  })
);

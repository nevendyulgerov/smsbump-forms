import React, { createContext, useReducer, FC } from 'react';
import themeMenuItems from '../config/themeMenuItems';
import mainMenuItems from '../config/mainMenuItems';
import {
  Store,
  SetThemeAction,
  SetDeviceAction,
  SetMainMenuItemAction,
  ToggleThemeMenuAction
} from '../interfaces/store';
import {
  SET_DEVICE,
  SET_MAIN_MENU_ITEM,
  SET_THEME,
  TOGGLE_THEME_MENU
} from './types';

export const initialState = {
  theme: themeMenuItems[0],
  device: 'desktop',
  mainMenuItem: mainMenuItems[0],
  isThemeMenuActive: false
}

type Action = SetThemeAction
  | SetDeviceAction
  | SetMainMenuItemAction
  | ToggleThemeMenuAction;

const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: (action as SetThemeAction).theme
      };
    case SET_DEVICE:
      return {
        ...state,
        device: (action as SetDeviceAction).device
      }
    case SET_MAIN_MENU_ITEM:
      return {
        ...state,
        mainMenuItem: (action as SetMainMenuItemAction).mainMenuItem
      }
    case TOGGLE_THEME_MENU:
      return {
        ...state,
        isThemeMenuActive: (action as ToggleThemeMenuAction).isThemeMenuActive
      };
    default:
      return state;
  }
}

export const AppContext = createContext<[Store, React.Dispatch<Action>]>([
  initialState,
  () => {},
])

export const AppContextProvider: FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
};

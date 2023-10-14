import ChangeTitle from './ChangeTitleScreen';
import ConfigModeScreen from './ConfigModeScreen';
import WifiConfigScreen from './WifiConfigScreen';
import Router from '@navigation/Router';

export const common = {
  [Router.WIFI_SCREEN]: WifiConfigScreen,
  [Router.CHANGE_TITLE_SCREEN]: ChangeTitle,
  [Router.CONFIG_MODE_SCREEN]: ConfigModeScreen,
};

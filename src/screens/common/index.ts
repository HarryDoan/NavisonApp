import ChangeTitle from './ChangeTitle';
import WifiConfigScreen from './WifiConfigScreen';
import Router from '@navigation/Router';

export const common = {
  [Router.WIFI_SCREEN]: WifiConfigScreen,
  [Router.CHANGE_TITLE_SCREEN]: ChangeTitle,
};

import ChangeKeyScreen from './ChangeKeyScreen';
import ChangeTitle from './ChangeTitleScreen';
import ConfigModeScreen from './ConfigModeScreen';
import OtpInputScreen from './OtpInputScreen';
import ScanWifiScreen from './ScanWifiScreen';
import WifiConfigScreen from './WifiConfigScreen';
import Router from '@navigation/Router';

export const common = {
  [Router.WIFI_SCREEN]: WifiConfigScreen,
  [Router.CHANGE_TITLE_SCREEN]: ChangeTitle,
  [Router.CONFIG_MODE_SCREEN]: ConfigModeScreen,
  [Router.OTP_SCREEN]: OtpInputScreen,
  [Router.SCAN_WIFI_SCREEN]: ScanWifiScreen,
  [Router.CHANGE_KEY_SCREEN]: ChangeKeyScreen,
};

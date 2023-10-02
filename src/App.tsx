import i18n from './i18n';
import RootStack from './navigation/RootStack';
import {PortalProvider} from '@gorhom/portal';
import store, {persistor} from '@redux/store';
import {COLORS} from '@theme/index';
import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

enableScreens();

const AppComponent = () => {
  const {t} = useTranslation();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg_primary} />
      <RootStack />
    </>
  );
};

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    i18n.changeLanguage('vi');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PortalProvider>
          <SafeAreaProvider>
            <AppComponent />
          </SafeAreaProvider>
        </PortalProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

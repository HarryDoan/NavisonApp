import RootStack from './navigation/RootStack';
import i18n from '@i18n';
import {allUsers} from '@redux/components/selectors';
import {persistor, store} from '@redux/store';
import {COLORS} from '@theme';
import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

enableScreens();

const AppComponent = () => {
  const usersList = useSelector(allUsers);

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
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <AppComponent />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

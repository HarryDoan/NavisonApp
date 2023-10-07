import BottomContainer from './BottomTabNavigation';
import CommonContainer from './CommonContainer';
import {navigationRef} from './NavigationRef';
import Router from './Router';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name={Router.BOTTOM_CONTAINER}
          component={BottomContainer}
        />
        <Stack.Screen
          name={Router.COMMON_CONTAINER}
          component={CommonContainer}
        />

        {/* <Stack.Screen name={Router.AUTH_CONTAINER} component={AuthContainer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

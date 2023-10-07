import {common} from '../screens/common';
import Router from './Router';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const CommonStack = createNativeStackNavigator();

const CommonContainer = () => {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name={Router.WIFI_SCREEN}
        component={common[Router.WIFI_SCREEN]}
      />

      <CommonStack.Screen
        name={Router.CHANGE_TITLE_SCREEN}
        component={common[Router.CHANGE_TITLE_SCREEN]}
      />
    </CommonStack.Navigator>
  );
};

export default CommonContainer;

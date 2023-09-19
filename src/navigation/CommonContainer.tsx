import {common} from '../screens/common';
import Router from './Router';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const CommonStack = createNativeStackNavigator();

const CommonContainer = () => {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name={Router.CHART_SCREEN}
        component={common[Router.CHART_SCREEN]}
      />
    </CommonStack.Navigator>
  );
};

export default CommonContainer;

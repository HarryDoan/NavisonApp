import {icons} from '@assets';
import {Text} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '@screens/bottom/HomeScreen';
import {COLORS} from '@theme';
import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: icons.ic_home,
    icon_active: icons.ic_home_active,
    component: MainScreen,
  },
  {
    route: 'Market',
    label: 'Market',
    icon: icons.ic_market,
    icon_active: icons.ic_market_active,
    component: MainScreen,
  },
  {
    route: 'Trade',
    label: 'Trade',
    icon: icons.ic_trade,
    icon_active: icons.ic_trade_active,
    component: MainScreen,
  },
  {
    route: 'Wallet',
    label: 'Wallet',
    icon: icons.ic_wallet,
    icon_active: icons.ic_wallet_active,
    component: MainScreen,
  },
];

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);

  useEffect(() => {
    if (viewRef.current) {
      const animateTab = () => {
        if (focused) {
          viewRef.current.animate({
            0: {scale: 0.5, rotate: '0deg'},
            1: {scale: 1, rotate: '360deg'},
          });
        } else {
          viewRef.current.animate({
            0: {scale: 0.5, rotate: '360deg'},
            1: {scale: 1, rotate: '0deg'},
          });
        }
      };

      animateTab();
    }
  }, [focused]);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}></TouchableOpacity>
  );
};

const BottomContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 0,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          paddingTop: 5,
          borderTopColor: COLORS.bg_primary,
          backgroundColor: COLORS.bg_primary,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
});

export default BottomContainer;

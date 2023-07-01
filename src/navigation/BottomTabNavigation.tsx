import HomeScreen from '../screens/bottom/HomeScreen';
import {icons} from '@assets';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
    component: HomeScreen,
  },
  {
    route: 'Market',
    label: 'Market',
    icon: icons.ic_market,
    icon_active: icons.ic_market_active,
    component: HomeScreen,
  },
  {
    route: 'Trade',
    label: 'Trade',
    icon: icons.ic_trade,
    icon_active: icons.ic_trade_active,
    component: HomeScreen,
  },
  {
    route: 'Wallet',
    label: 'Wallet',
    icon: icons.ic_wallet,
    icon_active: icons.ic_wallet_active,
    component: HomeScreen,
  },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (viewRef.current) {
      const animateTab = () => {
        if (focused) {
          viewRef.current.animate({
            0: {scale: 0.5, rotate: '0deg'},
            1: {scale: 1.25, rotate: '360deg'},
          });
        } else {
          viewRef.current.animate({
            0: {scale: 1.25, rotate: '360deg'},
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
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Image
          style={{
            width: 25,
            height: 27,
            resizeMode: 'stretch',
          }}
          source={focused ? item?.icon_active : item?.icon}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 15,
          right: 15,
          left: 15,
          borderRadius: 15,
          borderTopColor: COLORS.primary,
          backgroundColor: COLORS.primary,
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
  },
});

export default BottomContainer;

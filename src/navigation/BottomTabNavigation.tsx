import {icons} from '@assets/index';
import {Text} from '@components/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/bottom/Home';
import {COLORS} from '@theme/index';
import React, {useEffect, useRef} from 'react';
import {Image, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
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
type TabRoute = {
  route: string;
  label: string;
  icon: any;
  icon_active: any;
  component: React.ComponentType<any>;
};

const TabButton: React.FC<
  | {
      item: TabRoute;
      onPress: () => void;
      accessibilityState: any;
    }
  | any
> = ({item, onPress, accessibilityState}) => {
  const {focused} = accessibilityState;
  const viewRef = useRef<Animatable.View | any>(null);

  useEffect(() => {
    const animateTab = () => {
      const currentViewRef = viewRef.current as any;
      if (currentViewRef) {
        if (focused) {
          currentViewRef.animate({
            0: {scale: 0.5, rotate: '0deg'},
            1: {scale: 1, rotate: '360deg'},
          });
        } else {
          currentViewRef.animate({
            0: {scale: 0.5, rotate: '360deg'},
            1: {scale: 1, rotate: '0deg'},
          });
        }
      }
    };

    animateTab();
  }, [focused]);

  return (
    <Pressable onPress={onPress} style={styles.container}>
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
      <Text
        marginTop={10}
        fontSize={12}
        bold
        color={focused ? COLORS.yellow : COLORS.black_text}>
        {item?.label}
      </Text>
    </Pressable>
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

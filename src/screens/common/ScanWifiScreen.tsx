import {icons} from '@assets';
import {Block, Text, Pressable, Image} from '@components';
import HeaderCommon from '@components/common/HeaderCommon';
import HeaderTitle from '@components/common/HeaderTitle';
import {commonRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import {COLORS} from '@theme';
import {height, width} from '@utils/responses';
import React, {useState} from 'react';
import {ActivityIndicator, Button, FlatList} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import WifiManager from 'react-native-wifi-reborn';

const ScanWifiScreen = ({}) => {
  const [listWifi, setListWifi] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkLocationPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result === RESULTS.GRANTED) {
      scanWifi();
    } else {
      const requestResult = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      if (requestResult === RESULTS.GRANTED) {
        scanWifi();
      }
    }
  };

  const scanWifi = async () => {
    try {
      const wifiList = await WifiManager.loadWifiList();
      console.log(wifiList);
      setTimeout(() => {
        setIsLoading(false);
        setListWifi(wifiList);
      }, 500);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleChoiceWifi = (item: any) => {
    commonRoot.navigate(Router.WIFI_SCREEN, {item: item});
  };

  const _renderItem = ({item, index}: any) => {
    const wifi_ic =
      item?.level >= -60
        ? icons.ic_network
        : item?.level >= -90
        ? icons.ic_medium_sign_wifi
        : icons.ic_bad_sign_wifi;
    const size_ic = item?.level >= -60 ? 20 : item?.level >= -90 ? 13 : 7;

    return (
      <Pressable
        key={item?.BSSID?.toString()}
        onPress={() => handleChoiceWifi(item)}
        borderBottomWidth={1}
        paddingVertical={7}
        borderColor={COLORS.yellow_off}
        paddingHorizontal={15}
        row
        alignCenter
        spaceBetween>
        <Text
          style={{
            letterSpacing: 1.25,
          }}
          fontSize={16}
          semiBold
          color={COLORS.white_text}>
          {item?.SSID}
        </Text>
        <Image
          absolute
          right={0}
          bottom={7}
          width={(size_ic * 9) / 10}
          height={size_ic}
          resizeMode="stretch"
          source={wifi_ic}
        />
      </Pressable>
    );
  };

  return (
    <Block flex={1} backgroundColor={COLORS.bg_primary}>
      <HeaderTitle />
      <HeaderCommon title={'Scan Wifi'} />
      {isLoading && (
        <Block
          backgroundColor={'rgba(255,255,255,0.25)'}
          absoluteFillObject
          zIndex={900}
          width={width}
          height={height}
          justifyCenter
          alignCenter>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </Block>
      )}
      <Block paddingHorizontal={15}>
        <Button
          color={COLORS.yellow_off}
          title="Scan Wi-Fi"
          onPress={() => {
            checkLocationPermission();
            setIsLoading(true);
          }}
        />
      </Block>

      <Block paddingHorizontal={15} marginTop={25}>
        <FlatList
          data={listWifi}
          keyExtractor={(item: any) => item?.BSSID?.toString()}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default ScanWifiScreen;

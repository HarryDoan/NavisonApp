import {Block, FormInput} from '@components';
import HeaderCommon from '@components/common/HeaderCommon';
import HeaderTitle from '@components/common/HeaderTitle';
import {bottomRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import {COLORS} from '@theme';
import {ESP_URL} from '@utils';
import axios from 'axios';
import React, {useState} from 'react';

const WifiConfigScreen = ({route}: any) => {
  const {item} = route?.params;

  const [ssid, setSsid] = useState<string>(item?.SSID || '');
  const [password, setPassword] = useState<string | number>('');

  const sendWifiConfig = async () => {
    const espIp = ESP_URL;
    try {
      const response = await axios.post('http://192.168.2.77/post-data', {
        data: {
          ssid,
          password,
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Block flex={1} backgroundColor={COLORS.bg_primary}>
      <HeaderTitle />
      <HeaderCommon notGoBack title={'Config Wifi'} />
      <FormInput
        setValue_1={setSsid}
        value_1={ssid}
        placeHolder_value_1="SSID"
        setValue_2={setPassword}
        value_2={password}
        placeHolder_value_2="Password"
        handleDone={() => bottomRoot.navigate(Router.HOME_SCREEN)}
        titleButton={'Done'}
        is_show_value_2={true}
      />
    </Block>
  );
};

export default WifiConfigScreen;

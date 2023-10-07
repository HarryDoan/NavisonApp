import {Block, FormInput} from '@components';
import HeaderCommon from '@components/common/HeaderCommon';
import {ESP_URL} from '@utils';
import axios from 'axios';
import React, {useState} from 'react';

const WifiConfigScreen = ({}) => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const sendWifiConfig = async () => {
    const espIp = ESP_URL;
    try {
      await axios.post(`${espIp}/config`, `ssid=${ssid}&password=${password}`);
      console.log('Configuration sent successfully');
    } catch (error) {
      console.error('Error sending configuration', error);
    }
  };

  return (
    <Block>
      <HeaderCommon title={'Wifi Config'} />
      <FormInput
        setValue_1={setSsid}
        value_1={ssid}
        placeHolder_value_1="SSID"
        setValue_2={setPassword}
        value_2={password}
        placeHolder_value_2="Password"
        handleDone={sendWifiConfig}
        titleButton={'Done'}
        is_show_value_2={true}
      />
    </Block>
  );
};

export default WifiConfigScreen;

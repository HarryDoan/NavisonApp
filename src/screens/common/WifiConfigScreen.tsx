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

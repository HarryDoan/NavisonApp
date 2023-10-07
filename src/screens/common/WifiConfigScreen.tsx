import {icons} from '@assets';
import {Block, Image, Pressable} from '@components';
import HeaderHome from '@components/common/HeaderHome';
import {root} from '@navigation/NavigationRef';
import {COLORS} from '@theme';
import {height, width} from '@utils/responses';
import axios from 'axios';
import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

// WifiConfigScreen.js

const WifiConfigScreen = ({}) => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const sendWifiConfig = async () => {
    console.log('====================================');
    console.log('12313');
    console.log('====================================');
    const espIp = 'http://192.168.4.1';
    try {
      await axios.post(`${espIp}/config`, `ssid=${ssid}&password=${password}`);
      console.log('Configuration sent successfully');
    } catch (error) {
      console.error('Error sending configuration', error);
    }
  };

  return (
    <Block paddingVertical={15} paddingHorizontal={15}>
      <Pressable
        onPress={() => root.goBack()}
        justifyCenter
        alignCenter
        width={40}
        height={40}
        radius={40}
        backgroundColor={COLORS.bg_primary}>
        <Image source={icons.ic_go_back} square={25} />
      </Pressable>
      <Block
        style={{
          marginTop: 15,
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 15,
          backgroundColor: COLORS.gray,
        }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          placeholder="SSID"
          onChangeText={text => setSsid(text)}
          value={ssid}
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 10,
            borderRadius: 5,
            marginVertical: 15,
          }}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Button title="Send" onPress={sendWifiConfig} />
      </Block>
    </Block>
  );
};

export default WifiConfigScreen;

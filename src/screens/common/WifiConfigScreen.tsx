// WifiConfigScreen.js
import axios from 'axios';
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const WifiConfigScreen = ({}) => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const sendWifiConfig = async () => {
    const espIp = 'http://192.168.4.1/config';
    try {
      await axios.post(
        `${espIp}/config`,
        'ssid=YourSSID&password=YourPassword',
      );
      console.log('Configuration sent successfully');
    } catch (error) {
      console.error('Error sending configuration', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="SSID"
        onChangeText={text => setSsid(text)}
        value={ssid}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Send" onPress={sendWifiConfig} />
    </View>
  );
};

export default WifiConfigScreen;

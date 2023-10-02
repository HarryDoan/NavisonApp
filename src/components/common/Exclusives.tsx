import {icons} from '@assets/index';
import {COLORS} from '@theme/index';
import React from 'react';
import {Image, View} from 'react-native';

const Exclusives = () => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: 'cover',
          }}
          source={icons.ic_home}
        />

        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: 'cover',
            backgroundColor: COLORS.red,
          }}
          source={icons.ic_eye_lock}
        />
      </View>
    </View>
  );
};

export default Exclusives;

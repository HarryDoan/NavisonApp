import {icons} from '@assets';
import Block from '@components/base/Block';
import Image from '@components/base/Image';
import Text from '@components/base/Text';
import {COLORS} from '@theme';
import React from 'react';
import {TextInput} from 'react-native';

const HeaderHome = () => {
  return (
    <Block
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
      }}>
      <Image
        style={{
          width: 40,
          height: 40,
          resizeMode: 'cover',
        }}
        source={icons.ic_user_logo}
      />
      <Block
        style={{
          width: '60%',
          borderRadius: 20,
          marginLeft: 15,
          paddingHorizontal: 25,
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
        }}>
        <Block
          style={{
            position: 'absolute',
            left: 10,
          }}>
          <Image
            style={{
              width: 15,
              height: 15,
              resizeMode: 'stretch',
            }}
            source={icons.ic_search}
          />
        </Block>
        <TextInput
          placeholder="Bitcoin"
          placeholderTextColor={COLORS.black_text}
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '500',
            height: 40,
          }}
        />
      </Block>

      <Block
        style={{
          position: 'absolute',
          right: 20,
        }}>
        <Block
          style={{
            position: 'absolute',
            right: -20,
            top: -5,
            width: 25,
            height: 15,
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.yellow,
          }}>
          <Text
            style={{
              color: COLORS.black_text,
              fontSize: 10,
            }}>
            99+
          </Text>
        </Block>
        <Image
          width={32}
          height={35}
          resizeMode="stretch"
          source={icons.ic_notify}
        />
      </Block>
    </Block>
  );
};

export default HeaderHome;

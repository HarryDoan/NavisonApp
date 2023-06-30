import {icons} from '@assets';
import {COLORS} from '@theme';
import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: COLORS.bg_primary,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: 'cover',
          }}
          source={icons.ic_user_logo}
        />
        <View
          style={{
            width: '60%',
            borderRadius: 20,
            marginLeft: 15,
            paddingHorizontal: 25,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
          }}>
          <View
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
          </View>
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
        </View>

        <View
          style={{
            position: 'absolute',
            right: 20,
          }}>
          <View
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
          </View>
          <Image
            style={{
              width: 32,
              height: 35,
              resizeMode: 'stretch',
            }}
            source={icons.ic_notify}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

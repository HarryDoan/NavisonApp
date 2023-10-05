/* eslint-disable prettier/prettier */
import {Block, Text} from '@components';
import HeaderTitle from '@components/common/HeaderTitle';
import {COLORS} from '@theme';
import {fakeData} from '@utils/fakeData';
import {height, width} from '@utils/responses';
import React from 'react';
import {View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MainScreen = () => {
  const connectToDevice = () => {};
  return (
    <LinearGradient
      colors={['#29313C', '#172E4E']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <Block
        paddingHorizontal={15}
        style={{
          alignItems: 'center',
          height: height,
        }}>
        <HeaderTitle />
        <FlatList
          data={fakeData}
          keyExtractor={(item: any) => item?.id}
          ItemSeparatorComponent={(props: any) => {
            console.log(props);
            return (
              <View
                style={{
                  height: 5,
                }}
              />
            );
          }}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  backgroundColor: '#29313C',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // paddingLeft: -5,
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: 'orange',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '700',
                    }}
                    onPress={() => connectToDevice()}>
                    {item?.name}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  height: 50,
                  width: '100%',
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: COLORS.yellow,
                  justifyContent: 'center',
                  paddingHorizontal: 30,
                  marginLeft: -width * 0.05,
                  zIndex: -1,
                }}>
                <Text color={COLORS.black_text} bold fontSize={18}>
                  Device {index + 1}
                </Text>
              </View>
            </View>
          )}
        />
      </Block>
    </LinearGradient>
  );
};

export default MainScreen;

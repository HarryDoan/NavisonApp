/* eslint-disable prettier/prettier */
import {Block, Pressable, Text} from '@components';
import HeaderTitle from '@components/common/HeaderTitle';
import {commonRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import {COLORS} from '@theme';
import {fakeData} from '@utils/fakeData';
import {height, width} from '@utils/responses';
import React from 'react';
import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MainScreen = () => {
  const handleChangeTitle = (item: any) => {
    commonRoot.navigate(Router.CHANGE_TITLE_SCREEN, {
      item,
    });
  };

  return (
    <LinearGradient
      colors={COLORS.gradient_1}
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
          ItemSeparatorComponent={() => {
            return (
              <Block
                style={{
                  height: 5,
                }}
              />
            );
          }}
          renderItem={({item, index}) => (
            <Block
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Block
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  backgroundColor: '#29313C',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Block
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: COLORS.yellow,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    color={COLORS.black_text}
                    bold
                    style={{
                      fontSize: 15,
                    }}>
                    {item?.name}
                  </Text>
                </Block>
              </Block>

              <Pressable
                onLongPress={() => handleChangeTitle(item)}
                borderRightRadius={100}
                style={{
                  height: 50,
                  width: width - 80,
                  backgroundColor: COLORS.primary,
                  justifyContent: 'center',
                  paddingHorizontal: 30,
                  marginLeft: -width * 0.05,
                  zIndex: -1,
                }}>
                <Text color={COLORS.black_text} bold fontSize={18}>
                  {`${item?.title} ${index + 1}`}
                </Text>
              </Pressable>
            </Block>
          )}
        />
      </Block>
    </LinearGradient>
  );
};

export default MainScreen;

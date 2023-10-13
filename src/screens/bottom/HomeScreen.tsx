/* eslint-disable prettier/prettier */
import {Block, Pressable, Text} from '@components';
import HeaderTitle from '@components/common/HeaderTitle';
import {commonRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import database from '@react-native-firebase/database';
import {COLORS} from '@theme';
import {height, width} from '@utils/responses';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MainScreen = () => {
  const [listCH, setListCH] = useState<any[]>([]);
  const sortListCH = listCH.sort((a, b) => a?.name.localeCompare(b?.name));

  useEffect(() => {
    database()
      .ref('/users/user_1')
      .on(
        'value',
        snapshot => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const listArray = [];
            for (const key in userData) {
              listArray.push({
                name: key,
                value: userData[key]['value'],
                title: userData[key]['title'],
              });
            }
            setListCH(listArray);
          } else {
            console.log('Data not found');
          }
        },
        error => {
          console.error('Firebase error:', error);
        },
      );
    return () => {};
  }, []);

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
          data={sortListCH}
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
                    backgroundColor: item?.value ? COLORS.yellow : COLORS.gray,
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
                  backgroundColor: item?.value ? COLORS.primary : COLORS.gray,
                  justifyContent: 'center',
                  paddingHorizontal: 30,
                  marginLeft: -width * 0.05,
                  zIndex: -1,
                }}>
                <Text color={COLORS.black_text} bold fontSize={18}>
                  {`${item?.title} `}
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

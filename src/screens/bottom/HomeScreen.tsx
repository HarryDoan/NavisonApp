/* eslint-disable prettier/prettier */
import {Block, Modal, Pressable, Text} from '@components';
import HeaderTitle from '@components/common/HeaderTitle';
import ListChannel from '@components/common/ListChannel';
import {commonRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import database from '@react-native-firebase/database';
import actions from '@redux/actions';
import {COLORS} from '@theme';
import {fetchDataFromFirebase} from '@utils';
import {height, width} from '@utils/responses';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

const MainScreen = () => {
  const dispatch = useDispatch();
  const [listCH, setListCH] = useState<any[]>([]);
  const sortListCH = listCH.sort((a, b) => a?.name.localeCompare(b?.name));

  useEffect(() => {
    dispatch({
      type: actions.SAVE_LIST_CHANNEL,
      payload: sortListCH,
    });
  }, [dispatch, sortListCH]);

  useEffect(() => {
    database()
      .ref('/users/user_2')
      .on(
        'value',
        snapshot => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const listArray = [];
            for (const key in userData) {
              listArray.push({
                name: key,
                id: userData[key]['id'],
                order: userData[key]['order'],
                value: userData[key]['value'],
                title: userData[key]['title'],
                mode_1: userData[key]['mode_1'],
                mode_1_counter: userData[key]['mode_1_counter'],
                mode_2: userData[key]['mode_2'],
                mode_2_counter: userData[key]['mode_2_counter'],
                mode_3: userData[key]['mode_3'],
                mode_3_counter: userData[key]['mode_3_counter'],
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

  const handleConfigMode = (mode: string | number) => {
    let filterCondition;
    if (mode === 1) {
      filterCondition = (item: any) => item && item?.mode_1;
    } else if (mode === 2) {
      filterCondition = (item: any) => item && item?.mode_2;
    } else {
      filterCondition = (item: any) => item && item?.mode_3;
    }

    const newList = sortListCH?.filter(filterCondition);

    commonRoot.navigate(Router.CONFIG_MODE_SCREEN, {item: sortListCH, mode});
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

        <ListChannel data={sortListCH} handleChangeTitle={handleChangeTitle} />

        <Block absolute bottom={height * 0.2} width={'100%'} row spaceAround>
          <Pressable
            onLongPress={() => handleConfigMode(1)}
            width={75}
            height={45}
            justifyCenter
            alignCenter
            backgroundColor={COLORS.primary}
            radius={4}>
            <Text color={COLORS.black_text} fontSize={16} bold>
              Mode 1
            </Text>
          </Pressable>

          <Pressable
            onLongPress={() => handleConfigMode(2)}
            width={75}
            height={45}
            justifyCenter
            alignCenter
            backgroundColor={COLORS.primary}
            radius={4}>
            <Text color={COLORS.black_text} fontSize={16} bold>
              Mode 2
            </Text>
          </Pressable>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default MainScreen;

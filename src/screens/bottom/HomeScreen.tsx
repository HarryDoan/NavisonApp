/* eslint-disable prettier/prettier */
import {icons} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import HeaderTitle from '@components/common/HeaderTitle';
import ListChannel from '@components/common/ListChannel';
import {commonRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import actions from '@redux/actions';
import {COLORS} from '@theme';
import {fakeData, updateStatus} from '@utils/fakeData';
import {height, width} from '@utils/responses';
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const MainScreen = () => {
  const dispatch = useDispatch();
  const listCH = useSelector((state: any) => state?.users?.list_channel);
  const sortListCH = listCH.sort((a: any, b: any) =>
    a?.name.localeCompare(b?.name),
  );
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [itemChoice, setItemChoice] = useState<any>(null);
  const [disableMode, setDisableMode] = useState<boolean>(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    dispatch({
      type: actions.SAVE_LIST_CHANNEL,
      payload: fakeData,
    });
  }, [dispatch]);

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

  const handleStartMode = () => {
    setDisableMode(true);
    let index = 0;

    const processNextItem = () => {
      if (index < sortListCH?.length) {
        const itemToUpdate = sortListCH[index];
        handleUpdateListChannel(itemToUpdate);
        updateStatus(index);
        index++;
        setTimeout(processNextItem, itemToUpdate?.timer || 1000);
      } else {
        setDisableMode(false);
      }
    };

    processNextItem();
  };
  const handleUpdateListChannel = (i: any) => {
    dispatch({
      type: actions.SAVE_LIST_CHANNEL,
      payload: sortListCH?.map((item: any) =>
        item?.name === i?.name ? {...item, status: !item?.status} : item,
      ),
    });
  };
  const handleChangeStatus = () => {
    setIsShowModal(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      handleUpdateListChannel(itemChoice);
    }, 500);
  };

  return (
    <Block flex={1} backgroundColor={COLORS.bg_primary}>
      <Block>
        <HeaderTitle />

        <ListChannel
          setIsShowModal={setIsShowModal}
          setItemChoice={setItemChoice}
          data={sortListCH}
        />
      </Block>
      <Block
        paddingHorizontal={15}
        alignSelfCenter
        absolute
        bottom={35}
        width={'100%'}
        row
        spaceBetween>
        <Pressable
          onLongPress={() => handleConfigMode(1)}
          width={75}
          height={45}
          justifyCenter
          alignCenter
          backgroundColor={COLORS.primary}
          radius={5}>
          <Image source={icons.ic_setting} square={25} />
        </Pressable>

        <Pressable
          onLongPress={() => handleConfigMode(2)}
          width={75}
          height={45}
          justifyCenter
          alignCenter
          backgroundColor={COLORS.primary}
          radius={5}>
          <Image source={icons.ic_network} square={25} />
        </Pressable>

        <Pressable
          disabled={disableMode}
          onPress={handleStartMode}
          width={75}
          height={45}
          justifyCenter
          alignCenter
          backgroundColor={!disableMode ? COLORS.power_off : COLORS.power_on}
          radius={5}>
          <Image source={icons.ic_power} square={25} />
        </Pressable>
      </Block>
      {isShowModal && (
        <Pressable
          backgroundColor={COLORS.gray1}
          justifyCenter
          alignCenter
          absoluteFillObject
          onPress={() => setIsShowModal(false)}>
          <Pressable
            onPress={() => {}}
            paddingVertical={15}
            paddingHorizontal={15}
            radius={10}
            backgroundColor={COLORS.white}
            width={width - 60}
            height={height * 0.2}
            alignSelfCenter>
            <Text
              center
              numberOfLines={2}
              fontSize={18}
              semiBold
              color={COLORS.black_text}>
              {`Are you sure you want to change the status of Channel ${itemChoice?.name}!!`}
            </Text>

            <Block
              row
              width={'100%'}
              spaceBetween
              alignCenter
              absolute
              bottom={15}
              alignSelfCenter>
              <Pressable
                onPress={() => setIsShowModal(false)}
                width={width * 0.35}
                height={45}
                justifyCenter
                alignCenter
                radius={5}
                backgroundColor={COLORS.gray}>
                <Text color={COLORS.white} fontSize={16} bold>
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                onPress={() => handleChangeStatus()}
                width={width * 0.35}
                height={45}
                justifyCenter
                alignCenter
                radius={5}
                backgroundColor={COLORS.green}>
                <Text color={COLORS.white} fontSize={16} bold>
                  Confirm
                </Text>
              </Pressable>
            </Block>
          </Pressable>
        </Pressable>
      )}
    </Block>
  );
};

export default MainScreen;

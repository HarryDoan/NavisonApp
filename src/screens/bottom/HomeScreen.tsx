/* eslint-disable prettier/prettier */
import {icons} from '@assets';
import {
  Block,
  BottomComponent,
  Image,
  Pressable,
  Text,
  TopComponent,
} from '@components';
import HeaderTitle from '@components/common/HeaderTitle';
import ListChannel from '@components/common/ListChannel';
import {commonRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import actions from '@redux/actions';
import {COLORS} from '@theme';
import {fakeData} from '@utils/fakeData';
import {height, width} from '@utils/responses';
import React, {useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const MainScreen = () => {
  const dispatch = useDispatch();
  const listCH = useSelector((state: any) => state?.users?.list_channel);
  const statusMode = useSelector((state: any) => state?.users?.statusMode);
  const filterNormalList = listCH
    .filter(
      (item: any) =>
        item && item.isShow && item.timer !== 'OFF' && item.timer !== 'ON',
    )
    .sort((a: any, b: any) => a.order - b.order);

  const modeDefault = filterNormalList?.length > 0 ? filterNormalList : listCH;

  const [statusPowerBtn, setStatusPowerBtn] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [itemChoice, setItemChoice] = useState<any>(null);
  const [disableMode, setDisableMode] = useState<boolean>(false);

  const timeoutRef = useRef<any>(null);

  const updateStatusOn = (index: number) => {
    modeDefault[index].status = true;
  };

  const updateStatusOff = (index: number) => {
    modeDefault[index].status = false;
  };

  const handleConfigMode = () => {
    commonRoot.navigate(Router.OTP_SCREEN, {
      screen: 'CONFIG',
      item: fakeData,
    });
  };

  const handleStartMode = async () => {
    dispatch({
      type: actions.STATUS_MODE,
    });
    setStatusPowerBtn(true);
    setDisableMode(true);

    const modeLength = modeDefault.length;

    for (let index = 0; index < modeLength; index++) {
      const itemToUpdate = modeDefault[index];
      await new Promise((resolve: any) => {
        setTimeout(() => {
          handleUpdateStatusOn(itemToUpdate);
          updateStatusOn(index);
          if (index === modeLength - 1) {
            setDisableMode(false);
          }
          resolve();
        }, itemToUpdate?.timer || 1);
      });
    }
  };

  const handleOffMode = async () => {
    dispatch({
      type: actions.STATUS_MODE,
    });
    setStatusPowerBtn(true);
    setDisableMode(true);

    for (let index = modeDefault?.length - 1; index >= 0; index--) {
      const itemToUpdate = modeDefault[index];
      await new Promise((resolve: any) => {
        setTimeout(() => {
          handleUpdateStatusOff(itemToUpdate);
          updateStatusOff(index);
          resolve();
        }, itemToUpdate?.timer || 1);
      });
    }

    setStatusPowerBtn(false);
    setDisableMode(false);
  };

  const handleUpdateStatusOn = (i: any) => {
    dispatch({
      type: actions.SAVE_LIST_CHANNEL,
      payload: listCH?.map((item: any) =>
        item?.name === i?.name ? {...item, status: true} : item,
      ),
    });
  };

  const handleUpdateStatusOff = (i: any) => {
    dispatch({
      type: actions.SAVE_LIST_CHANNEL,
      payload: listCH?.map((item: any) =>
        item?.name === i?.name ? {...item, status: false} : item,
      ),
    });
  };

  const handleChangeStatus = () => {
    setIsShowModal(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (itemChoice?.status) {
        handleUpdateStatusOff(itemChoice);
      } else {
        handleUpdateStatusOn(itemChoice);
      }
    }, 500);
  };

  return (
    <Block flex={1} backgroundColor={COLORS.black}>
      <HeaderTitle />
      <ScrollView>
        <TopComponent marginVertical={15}>
          <Text fontSize={38} semiBold lineHeight={42} color={'aqua'}>
            ~ 220.6v
          </Text>
        </TopComponent>
        <ListChannel
          maxHeight={height * 0.7}
          disableMode={disableMode}
          setIsShowModal={setIsShowModal}
          setItemChoice={setItemChoice}
          data={listCH}
        />

        <Block height={200} />
      </ScrollView>

      <BottomComponent
        radius={15}
        backgroundColor={COLORS.on}
        paddingVertical={20}
        alignSelfCenter
        paddingHorizontal={20}>
        <Pressable
          disabled={!statusPowerBtn ? false : true}
          onPress={handleConfigMode}
          width={75}
          height={45}
          justifyCenter
          alignCenter
          backgroundColor={statusPowerBtn ? COLORS.yellow_off : COLORS.primary}
          radius={5}>
          <Image source={icons.ic_setting} square={25} />
        </Pressable>

        <Pressable
          disabled={disableMode}
          onPress={statusMode ? handleOffMode : handleStartMode}
          width={75}
          height={45}
          justifyCenter
          alignCenter
          backgroundColor={!statusMode ? COLORS.power_off : COLORS.power_on}
          radius={5}>
          <Image source={icons.ic_power} square={25} />
        </Pressable>
      </BottomComponent>
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

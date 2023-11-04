import {icons} from '@assets';
import {Block, ConfigChannels, Image, Pressable, Text} from '@components';
import HeaderCommon from '@components/common/HeaderCommon';
import HeaderTitle from '@components/common/HeaderTitle';
import {bottomRoot, commonRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import actions from '@redux/actions';
import {COLORS} from '@theme';
import {fakeData} from '@utils/fakeData';
import {height, width} from '@utils/responses';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

const ConfigModeScreen = ({route}: any) => {
  const dispatch = useDispatch();

  const {item} = route?.params;
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [closeIcon, setCloseIcon] = useState<boolean>(false);
  const [isShowModalSaveSuccess, setIsShowModalSaveSuccess] =
    useState<boolean>(false);
  const [isShowModalConfirmSave, setIsShowModalConfirmSave] =
    useState<boolean>(false);
  const [listOrder, setListOrder] = useState<any[]>([]);
  const parentList = fakeData.map((item: any) => {
    return {...item, status: false};
  });
  const childList = listOrder;

  const mergedMap = new Map();

  parentList.forEach(parentItem => {
    mergedMap.set(parentItem.name, {...parentItem, isShow: false});
  });

  childList.forEach(childItem => {
    mergedMap.set(childItem.name, {...childItem, isShow: true});
  });

  const mergedList = [...mergedMap.values()];

  const handleUpdateListData = () => {
    dispatch({
      type: actions.SAVE_LIST_CHANNEL,
      payload: mergedList,
    });

    dispatch({
      type: actions.SAVE_LIST_CHANNEL_TO_SHOW,
      payload: childList,
    });

    setTimeout(() => {
      setIsShowModalSaveSuccess(true);
    }, 400);
  };

  const handleGoHome = () => {
    bottomRoot.navigate(Router.HOME_SCREEN);
  };

  const handleNavigateChangKeyScreen = () => {
    commonRoot.navigate(Router.CHANGE_KEY_SCREEN);
  };

  const handleConfigWifi = () => {
    commonRoot.navigate(Router.SCAN_WIFI_SCREEN);
  };

  return (
    <Pressable
      onPress={() => setIsShowModal(false)}
      backgroundColor={COLORS.bg_primary}
      flex={1}>
      <HeaderTitle />
      <HeaderCommon notGoBack title={`Config Mode`} />

      <ConfigChannels
        setCloseIcon={setCloseIcon}
        maxHeight={height * 0.7}
        setListOrder={setListOrder}
        listOrder={listOrder}
        setIsShowModal={setIsShowModal}
        isShowModal={isShowModal}
        data={item}
      />
      {!closeIcon && (
        <Block
          paddingHorizontal={15}
          alignSelfCenter
          absolute
          bottom={15}
          width={'100%'}
          row
          spaceBetween>
          <Pressable
            onPress={handleGoHome}
            width={75}
            height={45}
            justifyCenter
            alignCenter
            backgroundColor={COLORS.yellow_off}
            radius={5}>
            <Image source={icons.ic_home} square={25} />
          </Pressable>

          <Pressable
            onPress={handleConfigWifi}
            width={75}
            height={45}
            justifyCenter
            alignCenter
            backgroundColor={COLORS.yellow_off}
            radius={5}>
            <Image source={icons.ic_network} square={25} />
          </Pressable>

          <Pressable
            onPress={() => handleNavigateChangKeyScreen()}
            width={75}
            height={45}
            justifyCenter
            alignCenter
            backgroundColor={COLORS.power_off}
            radius={5}>
            <Image source={icons.ic_key} square={25} />
          </Pressable>

          <Pressable
            onPress={() => setIsShowModalConfirmSave(true)}
            width={75}
            height={45}
            justifyCenter
            alignCenter
            backgroundColor={COLORS.power_off}
            radius={5}>
            <Image source={icons.ic_save} square={25} />
          </Pressable>
        </Block>
      )}
      {isShowModalConfirmSave && (
        <Pressable
          backgroundColor={COLORS.gray1}
          justifyCenter
          alignCenter
          absoluteFillObject
          onPress={() => setIsShowModalConfirmSave(false)}>
          <Pressable
            onPress={() => {}}
            paddingVertical={30}
            paddingHorizontal={15}
            radius={10}
            backgroundColor={COLORS.white}
            width={width - 60}
            height={height * 0.2}
            alignSelfCenter>
            <Text
              center
              numberOfLines={2}
              fontSize={22}
              semiBold
              color={COLORS.black_text}>
              {listOrder?.length > 0
                ? `Are you sure you want to save new List`
                : 'List is not empty !!'}
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
                onPress={() => setIsShowModalConfirmSave(false)}
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
                onPress={() => {
                  if (listOrder?.length > 0) {
                    handleUpdateListData();
                    setIsShowModalConfirmSave(false);
                  } else {
                    setIsShowModalConfirmSave(false);
                  }
                }}
                width={width * 0.35}
                height={45}
                justifyCenter
                alignCenter
                radius={5}
                backgroundColor={COLORS.green}>
                <Text color={COLORS.white} fontSize={16} bold>
                  {listOrder?.length > 0 ? 'Save' : 'OK'}
                </Text>
              </Pressable>
            </Block>
          </Pressable>
        </Pressable>
      )}

      {isShowModalSaveSuccess && (
        <Pressable
          backgroundColor={COLORS.gray1}
          justifyCenter
          alignCenter
          absoluteFillObject
          onPress={() => setIsShowModalSaveSuccess(false)}>
          <Pressable
            onPress={() => {}}
            paddingVertical={30}
            paddingHorizontal={15}
            radius={10}
            backgroundColor={COLORS.white}
            width={width - 60}
            height={height * 0.2}
            alignSelfCenter>
            <Text
              center
              numberOfLines={2}
              fontSize={22}
              semiBold
              color={COLORS.black_text}>
              {`Successfully Saved`}
            </Text>

            <Block
              row
              width={'100%'}
              justifyCenter
              alignCenter
              absolute
              bottom={15}
              alignSelfCenter>
              <Pressable
                onPress={() => setIsShowModalSaveSuccess(false)}
                width={width * 0.35}
                height={45}
                justifyCenter
                alignCenter
                radius={5}
                backgroundColor={COLORS.green}>
                <Text color={COLORS.white} fontSize={16} bold>
                  OK
                </Text>
              </Pressable>
            </Block>
          </Pressable>
        </Pressable>
      )}
    </Pressable>
  );
};

export default ConfigModeScreen;

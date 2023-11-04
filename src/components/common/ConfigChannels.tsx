/* eslint-disable prettier/prettier */
import {icons} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {COLORS} from '@theme';
import {fakeData, listTimer} from '@utils/fakeData';
import {width} from '@utils/responses';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';

const ListChannel = ({
  data,
  setIsShowModal,
  isShowModal,
  setListOrder,
  listOrder,
  maxHeight,
  setCloseIcon,
}: any) => {
  const dataDefault = fakeData.map((item: any) => {
    return {...item, status: true};
  });

  const previousList = useSelector(
    (state: any) => state.users?.list_channel_to_show,
  );

  const [itemChoice, setItemChoice] = useState<any>(null);

  useEffect(() => {
    setListOrder(previousList?.length > 0 ? previousList : fakeData);
  }, [previousList]);
  console.log('====================================');
  console.log(previousList);
  console.log('====================================');
  const handleChangeText = (e: string, item: any) => {
    const currentIndex = listOrder.findIndex(
      (l: any) => l?.name === item?.name,
    );
    if (currentIndex !== -1) {
      listOrder[currentIndex] = {
        ...listOrder[currentIndex],
        title: e,
      };
    }
  };

  const handleSetOrderItem = (item: any) => {
    const currentIndex = listOrder.findIndex(
      (orderItem: any) => orderItem?.name === item?.name,
    );

    if (currentIndex !== -1) {
      const updatedList = [...listOrder];
      updatedList.splice(currentIndex, 1);
      setListOrder(updatedList);
    } else {
      setListOrder([...listOrder, {...item, order: listOrder?.length}]);
    }

    setListOrder((prevListOrder: any) =>
      prevListOrder.map((orderItem: any, index: any) => ({
        ...orderItem,
        order: index,
      })),
    );
  };

  const isInList = (i: any) => {
    const currentIndex = listOrder.findIndex((l: any) => l?.name === i?.name);
    if (currentIndex !== -1) {
      return +currentIndex + 1;
    }
    return false;
  };

  const isInListPlaceHolder = (i: any) => {
    const currentIndex = listOrder.filter((l: any) => l?.name === i?.name);
    if (currentIndex !== -1) {
      return currentIndex?.[0]?.title;
    }
    return null;
  };

  const handleShowListCount = (isShow: any, setShowList: any, item: any) => {
    if (isShow) {
      setItemChoice(item);
      setShowList(true);
    }
  };

  const handleChangeTimer = (time: any) => {
    const currentIndex = listOrder.findIndex(
      (l: any) => l?.name === itemChoice?.name,
    );
    if (currentIndex !== -1) {
      {
        listOrder[currentIndex] = {
          ...listOrder[currentIndex],
          status: time === 'ON' && true,
          timer: time === 'ON' ? 'ON' : time === 'OFF' ? 'OFF' : +time * 1000,
        };
      }

      setIsShowModal(false);
    }
  };

  const renderTimer = (i: any) => {
    const currentIndex = listOrder.findIndex((l: any) => l?.name === i?.name);
    if (currentIndex !== -1) {
      return listOrder[currentIndex]?.timer === 'ON'
        ? 'ON'
        : listOrder[currentIndex]?.timer === 'OFF'
        ? 'OFF'
        : +listOrder[currentIndex]?.timer / 1000;
    }
    return 0;
  };

  const _renderItem = ({item}: any) => {
    return (
      <Pressable
        alignSelfCenter
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => handleSetOrderItem(item)}
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
            backgroundColor: COLORS.bg_primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Block
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: isInList(item)
                ? COLORS.yellow
                : COLORS.yellow_off,
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

          {isInList(item) && (
            <Pressable
              absolute
              top={0}
              right={0}
              justifyCenter
              alignCenter
              round={20}
              backgroundColor={COLORS.red}>
              <Text fontSize={12} color={COLORS.white_text} bold>
                {isInList(item)}
              </Text>
            </Pressable>
          )}
        </Pressable>

        <Pressable
          onPress={() => {
            handleShowListCount(isInList(item), setIsShowModal, item);
          }}
          row
          radius={5}
          style={{
            height: 50,
            width: 75,
            paddingHorizontal: 5,
            backgroundColor: isInList(item) ? COLORS.on : COLORS.off,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginRight: 10,
            marginLeft: 3,
          }}>
          <Text
            color={isInList(item) ? COLORS.text_on : COLORS.text_off}
            medium
            fontSize={16}>
            {renderTimer(item) === 'ON'
              ? 'ON'
              : renderTimer(item) === 'OFF'
              ? 'OFF'
              : renderTimer(item) + ' s'}
          </Text>

          <Image width={15} height={30} source={icons.ic_arrow_up_down} />
        </Pressable>

        <Pressable
          radius={5}
          style={{
            height: 50,
            width: width * 0.5,
            backgroundColor: isInList(item) ? COLORS.on : COLORS.off,
            justifyContent: 'center',
          }}>
          <TextInput
            onEndEditing={() => setCloseIcon(false)}
            onFocus={() => setCloseIcon(true)}
            editable={isInList(item) ? true : false}
            style={{
              backgroundColor: isInList(item) ? COLORS.on : COLORS.off,
              width: width * 0.5,
              paddingHorizontal: 10,
              fontSize: 16,
              fontWeight: '500',
              color: isInList(item) ? COLORS.text_on : COLORS.text_off,
            }}
            placeholderTextColor={
              isInList(item) ? COLORS.text_on : COLORS.text_off
            }
            maxLength={30}
            placeholder={isInListPlaceHolder(item) || item?.title}
            onChangeText={text => handleChangeText(text, item)}
          />
        </Pressable>
      </Pressable>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Block maxHeight={maxHeight}>
        <FlatList
          data={data}
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
          renderItem={_renderItem}
          ListFooterComponent={() => {
            return <Block height={30} />;
          }}
        />
        {isShowModal && (
          <Pressable
            justifyCenter
            alignCenter
            absoluteFillObject
            onPress={() => setIsShowModal(false)}>
            <Block
              borderTopRadius={10}
              width={width * 0.475}
              backgroundColor={COLORS.primary}
              justifyCenter
              alignCenter
              paddingVertical={10}>
              <Text color={COLORS.black_text} bold fontSize={18}>
                {itemChoice?.name}
              </Text>
            </Block>
            <ScrollView
              style={{
                paddingVertical: 0,
                maxHeight: 400,
                width: width * 0.5,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: COLORS.white,
                paddingHorizontal: 15,
              }}>
              {listTimer?.map((item: any, index: number) => {
                return (
                  <Pressable
                    key={index.toString()}
                    onPress={() => handleChangeTimer(item)}
                    paddingVertical={15}
                    width={'100%'}
                    borderTopWidth={1}
                    borderColor={COLORS.gray}
                    alignSelfCenter>
                    <Text
                      center
                      numberOfLines={2}
                      fontSize={18}
                      semiBold
                      color={COLORS.black_text}>
                      {index > 1 ? item + ' s' : item}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </Pressable>
        )}
      </Block>
    </KeyboardAvoidingView>
  );
};

export default ListChannel;

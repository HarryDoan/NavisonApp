/* eslint-disable prettier/prettier */
import {Block, Pressable, Text} from '@components';
import {COLORS} from '@theme';
import {width} from '@utils/responses';
import React from 'react';
import {FlatList} from 'react-native';

const ListChannel = ({
  data,
  setIsShowModal,
  setItemChoice,
  disableMode,
  maxHeight,
}: any) => {
  const handleChoiceItem = (item: any) => {
    if (!disableMode) {
      setItemChoice(item);
      setIsShowModal(true);
    }
  };

  const _renderItem = ({item}: any) => {
    return (
      <Pressable
        onPress={() => {
          handleChoiceItem(item);
        }}
        alignSelfCenter
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Block
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
              backgroundColor: item?.status ? COLORS.yellow : COLORS.yellow_off,
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
          onPress={() => {
            handleChoiceItem(item);
          }}
          borderRightRadius={100}
          style={{
            height: 50,
            width: width * 0.75,
            backgroundColor: item?.status ? COLORS.on : COLORS.off,
            justifyContent: 'center',
            paddingHorizontal: 30,
            marginLeft: -width * 0.035,
            zIndex: -1,
          }}>
          <Text
            color={item?.status ? COLORS.text_on : COLORS.text_off}
            bold
            fontSize={18}>
            {`${item?.title} `}
          </Text>
        </Pressable>
      </Pressable>
    );
  };

  return (
    <Block paddingHorizontal={15} maxHeight={maxHeight}>
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
      />
    </Block>
  );
};

export default ListChannel;

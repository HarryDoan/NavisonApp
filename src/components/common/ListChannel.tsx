/* eslint-disable prettier/prettier */
import {Block, Modal, Pressable, Text} from '@components';
import {root} from '@navigation/NavigationRef';
import database from '@react-native-firebase/database';
import {COLORS} from '@theme';
import {height, width} from '@utils/responses';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const ListChannel = ({data, handleChangeTitle}: any) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [choiceChannel, setChoiceChannel] = useState<any>(null);

  const handleChangeStatus = () => {
    const itemRef = database().ref(`/users/user_2/${choiceChannel?.name}`);
    itemRef
      .update({
        value: choiceChannel?.value ? 0 : 1,
      })
      .then(() => {
        console.log('Data updated.');
        setIsShowModal(false);
      })
      .catch(error => {
        console.error('Error updating data:', error);
        setIsShowModal(false);
      });
  };
  const _renderItem = ({item, index}: any) => {
    return (
      <Pressable
        onPress={() => {
          setChoiceChannel(item);
          setIsShowModal(true);
        }}
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
          onPress={() => {
            setChoiceChannel(item);
            setIsShowModal(true);
          }}
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
      </Pressable>
    );
  };

  return (
    <Block>
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
      {isShowModal && (
        <Pressable
          marginTop={height * 0.175}
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
              {`Bạn có chắc muốn chuyển trạng thái Channel ${choiceChannel?.name}!!`}
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
                width={75}
                height={45}
                justifyCenter
                alignCenter
                radius={5}
                backgroundColor={COLORS.gray}>
                <Text color={COLORS.white} fontSize={16} bold>
                  Hủy
                </Text>
              </Pressable>

              <Pressable
                onPress={handleChangeStatus}
                width={75}
                height={45}
                justifyCenter
                alignCenter
                radius={5}
                backgroundColor={COLORS.green}>
                <Text color={COLORS.white} fontSize={16} bold>
                  Đồng ý
                </Text>
              </Pressable>
            </Block>
          </Pressable>
        </Pressable>
      )}
    </Block>
  );
};

export default ListChannel;

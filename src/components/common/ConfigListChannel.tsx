/* eslint-disable prettier/prettier */
import {Block, Pressable, Text} from '@components';
import {root} from '@navigation/NavigationRef';
import database from '@react-native-firebase/database';
import {COLORS} from '@theme';
import {height, width} from '@utils/responses';
import React, {useEffect, useState} from 'react';
import {FlatList, TextInput} from 'react-native';

const ConfigListChannel = ({
  data,
  handleChangeTitle,
  mode,
  listChannelOfMode,
}: any) => {
  const [listChannelChoice, setListChannelChoice] = useState<any>([]);

  const counterProp =
    mode === 1
      ? 'mode_1_counter'
      : mode === 2
      ? 'mode_2_counter'
      : 'mode_3_counter';

  const modeProp = mode === 1 ? 'mode_1' : mode === 2 ? 'mode_2' : 'mode_3';

  useEffect(() => {
    let filterCondition;

    filterCondition = (item: any) => item && item?.[modeProp];

    const newList = data?.filter(filterCondition);

    setListChannelChoice(newList);
  }, []);

  const checkChannelChoiceFromLocal = (i: any) => {
    const isItemInList = listChannelChoice?.some(
      (item: any) => item?.id === i?.id,
    );
    if (isItemInList) {
      return true;
    }
    return false;
  };

  const handleChoiceChannel = (i: any) => {
    const isItemInList = listChannelChoice?.some(
      (item: any) => item?.id === i?.id,
    );

    if (isItemInList) {
      const updatedList = listChannelChoice?.filter(
        (item: any) => item?.id !== i?.id,
      );
      setListChannelChoice(updatedList);
    } else {
      const newItem = {...i, [modeProp]: 1};
      setListChannelChoice((prevList: any[]) => [...prevList, newItem]);
    }
  };

  const handleChangeCounter = (i: any, text: string | number) => {
    const updatedList = listChannelChoice?.map((item: any) => {
      if (item?.id !== i?.id) {
        return item;
      } else {
        const updatedItem = {...item};
        updatedItem[counterProp] = +text;
        return updatedItem;
      }
    });

    setListChannelChoice(updatedList);
  };

  const handleChangeOrder = (i: any, text: string | number) => {
    let order: any = 1;
    if (+text > 0) {
      order = text;
    }
    const updatedList = listChannelChoice?.map((item: any) => {
      if (item?.id !== i?.id) {
        return item;
      } else {
        const updatedItem = {...item};
        updatedItem['order'] = +order;
        return updatedItem;
      }
    });

    setListChannelChoice(updatedList);
  };

  const handleDone = () => {
    const filteredParentArray = data.filter((parentItem: any) => {
      return !listChannelChoice.some(
        (childItem: any) => childItem.id === parentItem.id,
      );
    });

    const objectParentData = filteredParentArray.reduce(
      (result: any, item: any) => {
        const updatedItem = {
          ...item,
          [modeProp]: 0,
        };
        result[item.id] = updatedItem;
        return result;
      },
      {},
    );

    const objectChildData = listChannelChoice.reduce(
      (result: any, item: any) => {
        result[item.id] = item;
        return result;
      },
      {},
    );

    const itemRef = database().ref(`/users/user_2`);
    const updates = {
      ...objectParentData,
      ...objectChildData,
    };
    itemRef
      .update(updates)
      .then(() => {
        console.log('Data updated.');
        root.goBack();
      })
      .catch(error => console.error('Error updating data:', error));
  };

  const _renderItem = ({item, index}: any) => {
    return (
      <Block
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Block
          style={{
            width: 90,
            height: 90,
            borderRadius: 60,
            backgroundColor: '#29313C',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Block
            style={{
              width: 75,
              height: 75,
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
          justifyCenter
          onLongPress={() => handleChangeTitle(item)}
          borderRightRadius={100}
          style={{
            height: 75,
            width: width - 80,
            backgroundColor: COLORS.primary,
            paddingHorizontal: 30,
            marginLeft: -width * 0.05,
            zIndex: -1,
          }}>
          <Text width={'80%'} color={COLORS.black_text} bold fontSize={18}>
            {`${item?.title} `}
          </Text>

          <Pressable
            onPress={() => handleChoiceChannel(item)}
            absolute
            right={width * 0.06}
            top={height * 0.0075}>
            <Block
              round={20}
              backgroundColor={
                checkChannelChoiceFromLocal(item) ? COLORS.green : COLORS.white
              }
              borderWidth={1}
              borderColor={COLORS.gray}
            />
          </Pressable>

          <Block row spaceAround alignCenter>
            <Block width={'49%'} row alignCenter>
              <Text color={COLORS.black_text} bold fontSize={18}>
                {`Order:`}
              </Text>
              <TextInput
                maxLength={2}
                onChangeText={(text: string | number) =>
                  handleChangeOrder(item, text)
                }
                editable={checkChannelChoiceFromLocal(item) ? true : false}
                keyboardType={'numeric'}
                placeholder={item?.order.toString()}
                style={{
                  marginLeft: 3,
                  width: '40%',
                  height: 40,
                  textAlign: 'center',
                  color: COLORS.black_text,
                  borderWidth: 1,
                  borderRadius: 5,
                  fontSize: 14,
                  fontWeight: 'bold',
                  borderColor: COLORS.black_text,
                }}
              />
            </Block>

            <Block width={'49%'} row alignCenter>
              <Text color={COLORS.black_text} bold fontSize={18}>
                {`Counter: `}
              </Text>
              <TextInput
                maxLength={2}
                onChangeText={(text: string | number) =>
                  handleChangeCounter(item, text)
                }
                editable={checkChannelChoiceFromLocal(item) ? true : false}
                keyboardType={'numeric'}
                placeholder={item?.[counterProp]?.toString()}
                style={{
                  marginLeft: 3,
                  width: '40%',
                  height: 40,
                  textAlign: 'center',
                  color: COLORS.black_text,
                  borderWidth: 1,
                  borderRadius: 5,
                  fontWeight: 'bold',
                  borderColor: COLORS.black_text,
                }}
              />
            </Block>
          </Block>
        </Pressable>
      </Block>
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
      <Pressable
        onPress={handleDone}
        width={110}
        height={45}
        radius={5}
        justifyCenter
        alignCenter
        backgroundColor={COLORS.green}
        absolute
        bottom={height * 0.175}
        alignSelfCenter>
        <Text fontSize={18} bold color={COLORS.white}>
          Done
        </Text>
      </Pressable>
    </Block>
  );
};

export default ConfigListChannel;

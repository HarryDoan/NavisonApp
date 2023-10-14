/* eslint-disable prettier/prettier */
import {Block, Pressable, Text} from '@components';
import {root} from '@navigation/NavigationRef';
import database from '@react-native-firebase/database';
import {COLORS} from '@theme';
import {width} from '@utils/responses';
import React from 'react';
import {FlatList, TextInput} from 'react-native';

const ConfigListChannel = ({data, handleChangeTitle, mode}: any) => {
  const counterProp =
    mode === 1
      ? 'mode_1_counter'
      : mode === 2
      ? 'mode_2_counter'
      : 'mode_3_counter';

  const handleDone = () => {
    const itemsToUpdate: any = {
      CH_3: 5,
      CH_4: 7,
    };

    const newData: any = {};

    for (const itemKey in itemsToUpdate) {
      const newValue = itemsToUpdate[itemKey];
      const propertyPath = `/users/user_1/${itemKey}/mode_1_counter`;
      newData[propertyPath] = newValue;
    }

    const itemRef = database().ref(`/users/user_1`);
    itemRef
      .update(newData)
      .then(() => {
        console.log('Data updated.');
        root.goBack();
      })
      .catch(error => console.error('Error updating data:', error));
  };

  return (
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
      renderItem={({item, index}: any) => (
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
            justifyCenter
            onLongPress={() => handleChangeTitle(item)}
            borderRightRadius={100}
            style={{
              height: 75,
              width: width - 80,
              backgroundColor: item?.value ? COLORS.primary : COLORS.gray,
              paddingHorizontal: 30,
              marginLeft: -width * 0.05,
              zIndex: -1,
            }}>
            <Text width={'100%'} color={COLORS.black_text} bold fontSize={18}>
              {`${item?.title} `}
            </Text>

            <Block row spaceAround alignCenter>
              <Block width={'49%'} row alignCenter>
                <Text color={COLORS.black_text} bold fontSize={18}>
                  {`Order:`}
                </Text>
                <TextInput
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
      )}
    />
  );
};

export default ConfigListChannel;

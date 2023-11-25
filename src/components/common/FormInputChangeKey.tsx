import {icons} from '@assets';
import Block from '@components/base/Block';
import Image from '@components/base/Image';
import Pressable from '@components/base/Pressable';
import Text from '@components/base/Text';
import {COLORS} from '@theme';
import React from 'react';
import {TextInput, Button} from 'react-native';

const FormInputChangeKey = ({
  handleDone,
  setValue_1,
  value_1,
  placeHolder_value_1 = 'Value 1',
  setValue_2,
  value_2,
  placeHolder_value_2 = 'Value 1',
  titleButton = 'DONE',
  is_show_value_2,
  isShowCurrentKey,
  setIsShowCurrentKey,
  isShowNewKey,
  setIsShowNewKey,
}: any) => {
  return (
    <Pressable
      paddingVertical={15}
      marginHorizontal={15}
      style={{
        marginTop: 15,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: COLORS.gray,
      }}>
      <Block marginVertical={10}>
        <Text fontSize={14} medium color={COLORS.white_text}>
          {placeHolder_value_1}
        </Text>
      </Block>

      <Block row alignCenter marginBottom={5} width={'100%'}>
        <TextInput
          keyboardType="numeric"
          secureTextEntry={isShowCurrentKey ? false : true}
          style={{
            height: 45,
            width: '100%',
            backgroundColor: COLORS.white,
            paddingHorizontal: 10,
            borderRadius: 5,
            fontSize: 18,
            fontWeight: '500',
            letterSpacing: 1.25,
            color: COLORS.black_text,
          }}
          maxLength={4}
          placeholder={value_1 || placeHolder_value_1}
          onChangeText={text => setValue_1(text)}
          value={value_1}
        />

        <Pressable
          onPress={() => {
            setIsShowCurrentKey(!isShowCurrentKey);
          }}
          height={'100%'}
          right={15}
          justifyCenter
          alignCenter
          absolute>
          <Image
            width={22}
            height={18}
            resizeMode="stretch"
            source={isShowCurrentKey ? icons.ic_eye : icons.ic_eye_lock}
          />
        </Pressable>
      </Block>

      {is_show_value_2 && (
        <Block width={'100%'}>
          <Block marginVertical={10}>
            <Text fontSize={14} medium color={COLORS.white_text}>
              {placeHolder_value_2}
            </Text>
          </Block>
          <Block row alignCenter marginBottom={15} width={'100%'}>
            <TextInput
              keyboardType="numeric"
              style={{
                width: '100%',
                backgroundColor: COLORS.white,
                paddingHorizontal: 10,
                borderRadius: 5,

                fontSize: 18,
                fontWeight: '500',
                letterSpacing: 1.25,
                color: COLORS.black_text,
              }}
              maxLength={4}
              placeholder={value_2 || placeHolder_value_2}
              onChangeText={text => setValue_2(text)}
              value={value_2}
              secureTextEntry={isShowNewKey ? false : true}
            />
            <Pressable
              onPress={() => {
                setIsShowNewKey(!isShowNewKey);
              }}
              height={'100%'}
              right={15}
              justifyCenter
              alignCenter
              absolute>
              <Image
                width={22}
                height={18}
                resizeMode="stretch"
                source={isShowNewKey ? icons.ic_eye : icons.ic_eye_lock}
              />
            </Pressable>
          </Block>
        </Block>
      )}
      <Button color={COLORS.primary} title={titleButton} onPress={handleDone} />
    </Pressable>
  );
};

export default FormInputChangeKey;

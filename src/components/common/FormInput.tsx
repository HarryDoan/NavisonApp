import {icons} from '@assets';
import Block from '@components/base/Block';
import Image from '@components/base/Image';
import Pressable from '@components/base/Pressable';
import {COLORS} from '@theme';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native';

const FormInput = ({
  handleDone,
  setValue_1,
  value_1,
  placeHolder_value_1 = 'Value 1',
  setValue_2,
  value_2,
  placeHolder_value_2 = 'Value 1',
  titleButton = 'DONE',
  is_show_value_2,
}: any) => {
  const [isShowPassValue2, setIsShowValue2] = useState<boolean>(false);

  return (
    <Block
      paddingVertical={15}
      marginHorizontal={15}
      style={{
        marginTop: 15,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: COLORS.gray,
      }}>
      <TextInput
        style={{
          backgroundColor: COLORS.white,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginBottom: 15,
          fontSize: 18,
          fontWeight: '500',
          letterSpacing: 1.25,
          color: COLORS.black_text,
        }}
        maxLength={22}
        placeholder={value_1 || placeHolder_value_1}
        onChangeText={text => setValue_1(text)}
        value={value_1}
      />

      {is_show_value_2 && (
        <Block marginBottom={15} row alignCenter width={'100%'}>
          <TextInput
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
            placeholder={value_2 || placeHolder_value_2}
            onChangeText={text => setValue_2(text)}
            value={value_2}
            secureTextEntry={isShowPassValue2 ? false : true}
          />
          <Pressable
            absolute
            right={10}
            onPress={() => setIsShowValue2(!isShowPassValue2)}>
            <Image
              width={22}
              height={18}
              resizeMode="stretch"
              source={isShowPassValue2 ? icons.ic_eye : icons.ic_eye_lock}
            />
          </Pressable>
        </Block>
      )}
      <Button
        color={COLORS.yellow_off}
        title={titleButton}
        onPress={handleDone}
      />
    </Block>
  );
};

export default FormInput;

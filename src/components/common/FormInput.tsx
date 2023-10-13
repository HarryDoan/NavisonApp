import Block from '@components/base/Block';
import {COLORS} from '@theme';
import React from 'react';
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
        }}
        maxLength={22}
        placeholder={value_1 || placeHolder_value_1}
        onChangeText={text => setValue_1(text)}
        value={value_1}
      />

      {is_show_value_2 && (
        <TextInput
          style={{
            backgroundColor: COLORS.white,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginBottom: 15,
          }}
          placeholder={value_2 || placeHolder_value_2}
          onChangeText={text => setValue_2(text)}
          value={value_2}
          secureTextEntry={true}
        />
      )}
      <Button title={titleButton} onPress={handleDone} />
    </Block>
  );
};

export default FormInput;

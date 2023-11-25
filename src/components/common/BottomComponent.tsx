import Block from '@components/base/Block';
import Text from '@components/base/Text';
import {COLORS} from '@theme';
import React from 'react';

const BottomComponent = ({
  bottom = 10,
  children,
  paddingVertical = 15,
  width = '90%',
  backgroundColor = COLORS.white_1,
  radius = 20,
  alignSelfCenter = true,
  paddingHorizontal = 20,
}: any) => {
  return (
    <Block
      absolute
      bottom={bottom}
      alignSelfCenter={alignSelfCenter}
      paddingHorizontal={paddingHorizontal}
      row
      alignCenter
      spaceBetween
      radius={radius}
      backgroundColor={backgroundColor}
      width={width}
      paddingVertical={paddingVertical}>
      {children}
    </Block>
  );
};

export default BottomComponent;

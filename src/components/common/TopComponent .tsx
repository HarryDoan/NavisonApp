import Block from '@components/base/Block';
import {COLORS} from '@theme';
import React from 'react';

const TopComponent = ({
  marginVertical = 15,
  children,
  paddingVertical = 15,
  width = '90%',
  backgroundColor = COLORS.on,
  radius = 20,
  alignSelfCenter = true,
  paddingHorizontal = 20,
}: any) => {
  return (
    <Block
      marginVertical={marginVertical}
      alignSelfCenter={alignSelfCenter}
      paddingHorizontal={paddingHorizontal}
      row
      alignCenter
      justifyCenter
      radius={radius}
      backgroundColor={backgroundColor}
      width={width}
      paddingVertical={paddingVertical}>
      {children}
    </Block>
  );
};

export default TopComponent;

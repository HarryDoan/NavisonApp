import {icons} from '@assets';
import Block from '@components/base/Block';
import Image from '@components/base/Image';
import Text from '@components/base/Text';
import {COLORS} from '@theme';
import React from 'react';

const HeaderHome = () => {
  return (
    <Block
      spaceBetween
      paddingHorizontal={15}
      alignCenter
      style={{
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 15,
      }}>
      <Image
        style={{
          width: 110,
          height: 50,
          resizeMode: 'stretch',
        }}
        source={icons.ic_logo}
      />

      <Text fontSize={12} bold uppercase color={COLORS.white_1}>
        power sequence controller
      </Text>
    </Block>
  );
};

export default React.memo(HeaderHome);

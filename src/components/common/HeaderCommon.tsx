import {icons} from '@assets';
import Block from '@components/base/Block';
import Image from '@components/base/Image';
import Pressable from '@components/base/Pressable';
import Text from '@components/base/Text';
import {root} from '@navigation/NavigationRef';
import {COLORS} from '@theme';
import React from 'react';

type HeaderCommonType = {
  title: string;
};

const HeaderCommon = ({title}: HeaderCommonType) => {
  return (
    <Block
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: COLORS.bg_primary,
        justifyContent: 'center',
      }}>
      <Pressable
        onPress={() => root.goBack()}
        justifyCenter
        alignCenter
        absolute
        left={10}>
        <Image square={25} resizeMode="cover" source={icons.ic_go_back} />
      </Pressable>
      <Block>
        <Text regular fontSize={16} color={COLORS.white_text}>
          {title || ''}
        </Text>
      </Block>
    </Block>
  );
};

export default HeaderCommon;

import {icons} from '@assets';
import Block from '@components/base/Block';
import Image from '@components/base/Image';
import Pressable from '@components/base/Pressable';
import Text from '@components/base/Text';
import {bottomRoot, root} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import {COLORS} from '@theme';
import React from 'react';

type HeaderCommonType = {
  title: string;
  notGoBack?: boolean;
};

const HeaderCommon = ({title, notGoBack = false}: HeaderCommonType) => {
  const handleClick = () => {
    if (notGoBack) {
      bottomRoot.navigate(Router.HOME_SCREEN);
    } else {
      root.goBack();
    }
  };
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
      {!notGoBack && (
        <Pressable
          onPress={handleClick}
          justifyCenter
          alignCenter
          absolute
          left={10}>
          <Image square={25} resizeMode="cover" source={icons.ic_go_back} />
        </Pressable>
      )}
      <Block>
        <Text medium fontSize={20} color={COLORS.white_text}>
          {title || ''}
        </Text>
      </Block>
    </Block>
  );
};

export default HeaderCommon;

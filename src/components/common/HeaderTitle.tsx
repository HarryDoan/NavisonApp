import {icons} from '@assets';
import Block from '@components/base/Block';
import Image from '@components/base/Image';
import Pressable from '@components/base/Pressable';
import {commonRoot} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import {COLORS} from '@theme';
import React from 'react';

const HeaderHome = ({value, handleSubmit}: any) => {
  console.log('====================================');
  console.log(value, handleSubmit);
  console.log('====================================');
  const handleNavigate = () => {
    commonRoot.navigate(Router.WIFI_SCREEN);
  };
  return (
    <Block
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
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

      <Block
        style={{
          position: 'absolute',
          right: 20,
        }}>
        <Pressable onPress={handleNavigate}>
          <Block justifyCenter alignCenter>
            <Block
              radius={4}
              height={30}
              width={4}
              backgroundColor={COLORS.yellow}
            />
            <Block
              radius={4}
              absolute
              height={4}
              width={30}
              backgroundColor={COLORS.yellow}
            />
          </Block>
        </Pressable>
      </Block>
    </Block>
  );
};

export default React.memo(HeaderHome);

import {icons} from '@assets';
import Block from '@components/base/Block';
import Image from '@components/base/Image';
import Pressable from '@components/base/Pressable';
import Text from '@components/base/Text';
import {COLORS} from '@theme';
import React, {useState} from 'react';

const TotalBalance = () => {
  const [showTotalBalance, setShowTotalBalance] = useState<boolean>(false);

  const handleToggleTotalBalance = () => {
    setShowTotalBalance(!showTotalBalance);
  };
  return (
    <Block>
      <Text fontSize={14} regular color={COLORS.white_text}>
        Total Balance
      </Text>
      <Block row alignCenter>
        <Text fontSize={32} bold color={COLORS.white_text}>
          {showTotalBalance ? '$ 15.501,8' : '******'}
        </Text>
        <Pressable
          onPress={handleToggleTotalBalance}
          square={25}
          justifyCenter
          alignCenter
          marginLeft={15}>
          <Image
            source={showTotalBalance ? icons.ic_eye : icons.ic_eye_lock}
            width={25}
            height={17}
            resizeMode="stretch"
          />
        </Pressable>
      </Block>
      <Block>
        <Text fontSize={14} regular color={COLORS.black_text}>
          {showTotalBalance ? '≈  ₫ 363.563.720,52' : '******'}
        </Text>
      </Block>
    </Block>
  );
};

export default TotalBalance;

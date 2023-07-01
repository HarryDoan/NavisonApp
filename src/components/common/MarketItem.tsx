import Block from '@components/base/Block';
import Pressable from '@components/base/Pressable';
import Text from '@components/base/Text';
import {COLORS} from '@theme';
import React from 'react';

type ItemType = {
  item: {
    name: string;
    us_price: number | string;
    vn_price: number | string;
    change: number | string;
    status: boolean;
  };
  idx: number;
};
const MarketItem = ({item, idx}: ItemType) => {
  return (
    <Block>
      {idx === 0 ? (
        <Block justifyCenter marginVertical={10} height={40}>
          <Text color={COLORS.white_text} medium fontSize={16}>
            {item?.name}
          </Text>
        </Block>
      ) : idx === 1 ? (
        <Block alignEnd marginVertical={10} spaceBetween height={40}>
          <Text medium fontSize={16} color={COLORS.white_text}>
            {item?.us_price}
          </Text>
          <Text regular fontSize={13} color={COLORS.black_text}>
            ₫ {item?.vn_price}
          </Text>
        </Block>
      ) : (
        <Block height={40} justifyCenter marginVertical={10}>
          <Pressable
            radius={5}
            width={90}
            height={40}
            backgroundColor={item?.status ? COLORS.green : COLORS.red}
            justifyCenter
            alignCenter>
            <Text medium fontSize={15} color={COLORS.white_text}>
              {item?.change}
            </Text>
          </Pressable>
        </Block>
      )}
    </Block>
  );
};

export default MarketItem;

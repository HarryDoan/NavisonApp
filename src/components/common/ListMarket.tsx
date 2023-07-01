import MarketItem from './MarketItem';
import Block from '@components/base/Block';
import Text from '@components/base/Text';
import {COLORS} from '@theme';
import {width} from '@utils/responses';
import React from 'react';

type HeaderType = {
  title: string;
  key: string;
};
type CryptoType = {
  name: string;
  key: string;
  us_price: number | string;
  vn_price: number | string;
  change: number | string;
  status: boolean;
};
const headerContent: HeaderType[] = [
  {
    title: 'Crypto',
    key: 'Crypto',
  },
  {
    title: 'Last Price',
    key: 'Last Price',
  },
  {
    title: '24h Chg%',
    key: '24h Chg%',
  },
];

const fakeCryptoList: CryptoType[] = [
  {
    name: 'BTC',
    key: 'BTC',
    us_price: '30.125,65',
    vn_price: '706.455.530,19',
    change: '-12,03%',
    status: false,
  },
  {
    name: 'ETH',
    key: 'ETH',
    us_price: '1,913.56',
    vn_price: '44.884,46',
    change: '+0.63%',
    status: true,
  },
  {
    name: 'DOT',
    key: 'DOT',
    us_price: '30.125,65',
    vn_price: '706.455.530,19',
    change: '-12,03%',
    status: false,
  },
  {
    name: 'NEAR',
    key: 'NEAR',
    us_price: '1,913.56',
    vn_price: '44.884,46',
    change: '+0.63%',
    status: true,
  },
  {
    name: 'BNB',
    key: 'BNB',
    us_price: '30.125,65',
    vn_price: '706.455.530,19',
    change: '-12,03%',
    status: false,
  },
  {
    name: 'MATIC',
    key: 'MATIC',
    us_price: '1,913.56',
    vn_price: '44.884,46',
    change: '+0.63%',
    status: true,
  },
  {
    name: 'ADA',
    key: 'ADA',
    us_price: '1,913.56',
    vn_price: '44.884,46',
    change: '+0.63%',
    status: true,
  },
];

const ListMarket = () => {
  return (
    <Block marginVertical={15}>
      <Block
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {headerContent.map((item, index) => {
          return (
            <Block
              alignEnd={index !== 0}
              marginLeft={index === 1 ? width * 0.1 : 0}
              key={item?.key}>
              <Text regular fontSize={14} color={COLORS.white_text}>
                {item?.title}
              </Text>
              {fakeCryptoList.map(item => {
                return (
                  <Block key={item?.name}>
                    <MarketItem item={item} idx={index} />
                  </Block>
                );
              })}
            </Block>
          );
        })}
      </Block>
      <Block marginVertical={10} alignSelfEnd>
        <Text medium fontSize={14} color={COLORS.yellow}>
          View more ▶
        </Text>
      </Block>
    </Block>
  );
};

export default ListMarket;

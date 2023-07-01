import {Block, ListMarket} from '@components';
import HeaderHome from '@components/common/HeaderHome';
import TotalBalance from '@components/common/TotalBalance';
import {COLORS} from '@theme';
import {height} from '@utils/responses';
import React from 'react';
import {ScrollView} from 'react-native';

const HomeScreen = () => {
  return (
    <Block flex={1} paddingHorizontal={15} backgroundColor={COLORS.bg_primary}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderHome />
        <TotalBalance />
        <ListMarket />

        <Block height={height * 0.1} />
      </ScrollView>
    </Block>
  );
};

export default HomeScreen;

import {Block, Image, Pressable} from '@components';
import {ScrollView, Text, View} from 'react-native';

import {COLORS} from '@theme';
import React from 'react';

const HorizontalScroll = ({data}) => {
  // console.log('====================================');
  // console.log('this data: ', data.length);
  // console.log('====================================');
  return (
    <View style={{}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} l>
        <View
          style={{
            marginTop: -15,
            flexDirection: 'row',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 15,
          }}>
          {data?.map((item, index) => {
            return (
              <Pressable
                key={item?.id}
                backgroundColor={COLORS.primary}
                style={{
                  paddingVertical: 10,
                  marginRight: 15,
                  alignItems: 'center',
                }}>
                <Block
                  paddingHorizontal={10}
                  paddingVertical={10}
                  radius={100}
                  justifyCenter
                  alignCenter
                  backgroundColor={COLORS.white}>
                  <Image
                    radius={5}
                    resizeMode="cover"
                    square={40}
                    source={{uri: item?.icon}}
                    backgroundColor={'red'}
                  />
                </Block>
                <Text
                  style={{
                    color: COLORS.secondary,
                    fontSize: 13,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {item?.title || 'Test'}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HorizontalScroll;

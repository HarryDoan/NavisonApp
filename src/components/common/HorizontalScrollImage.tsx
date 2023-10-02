import {Block, Image} from '@components';
import {Dimensions, ScrollView, Text, View} from 'react-native';

import React from 'react';
import {useRef} from 'react';
import {width} from '@utils/responsive';

const HorizontalScrollImage = ({data}) => {
  const scrollViewRef = useRef(null);
  return (
    <View>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          {data?.[0]?.title}
        </Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const activeIndex = Math.floor(
            offsetX / Dimensions.get('window').width,
          );
        }}>
        {data?.map((item, index) => (
          <Block
            row
            wrap
            key={index}
            style={{
              width: width,
              marginRight: 15,
            }}>
            {item?.data?.map((i, index) => (
              <Block
                wrap
                key={i.id}
                style={{
                  marginLeft: 6,
                  paddingHorizontal: 5,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}>
                <Image
                  radius={5}
                  resizeMode="stretch"
                  width={width / 3.75}
                  height={125}
                  source={{uri: i?.img}}
                />
              </Block>
            ))}
          </Block>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalScrollImage;

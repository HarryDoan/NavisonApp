import {IMAGES, icons} from '@assets';
import {Block, Image} from '@components';
import {width} from '@utils/responses';
import React, {useRef} from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';

const HomeScreen = () => {
  const data = [
    {
      id: 1,

      title: 'Wines & Spirits',
      data: [
        {
          id: 1,
          title: 'Wines & Spirits',
          img: IMAGES.img_1,
        },
        {
          id: 2,
          title: 'Beauty',
          img: IMAGES.img_2,
        },
        {
          id: 1,
          title: 'Wines & Spirits',
          img: IMAGES.img_3,
        },
        {
          id: 2,
          title: 'Beauty',
          img: IMAGES.img_3,
        },
      ],
    },
    {
      id: 2,

      title: 'Wines & Spirits',
      data: [
        {
          id: 1,
          title: 'Wines & Spirits',
          img: IMAGES.img_1,
        },
        {
          id: 2,
          title: 'Beauty',
          img: IMAGES.img_2,
        },
        {
          id: 1,
          title: 'Wines & Spirits',
          img: IMAGES.img_3,
        },
        {
          id: 2,
          title: 'Beauty',
          img: IMAGES.img_3,
        },
      ],
    },
  ];

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
          Featured Brands
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
        {data.map((item, index) => (
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
                  source={i.img}
                />
              </Block>
            ))}
          </Block>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

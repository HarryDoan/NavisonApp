import {icons, IMAGES} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {COLORS} from '@theme';
import {width} from '@utils/responsive';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const TabScreen: React.FC<any> = ({tabLabel}) => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);

  return (
    <ScrollView style={styles.tabContent}>
      {items?.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Text testID={`tab${tabLabel}-item${index}`}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const TabViewExample = ({data}) => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollViewRef = useRef(null);

  // const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const scrollToTab = index => {
    scrollViewRef.current?.scrollTo(
      {
        x: index * Dimensions.get('window').width,
        animated: true,
      },
      () => {},
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} l>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data?.map((item, idx) => {
            return (
              <Pressable
                onPress={() => {
                  console.log(idx);
                  setActiveTab(idx);
                  scrollToTab(idx);
                }}
                key={item?.id}
                style={{
                  margin: 15,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor:
                    idx === activeTab ? COLORS.secondary : 'white',
                }}>
                <Text
                  style={{
                    color: idx === activeTab ? 'white' : COLORS.text2,
                  }}>
                  {item?.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <ScrollView
        style={{
          backgroundColor: 'green',
          marginTop: -15,
        }}
        ref={scrollViewRef}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const windowWidth = Dimensions.get('window').width;
          const activeIndex = Math.round(offsetX / windowWidth);

          setActiveTab(activeIndex);
        }}>
        {data?.map((i, index) => (
          <Block>
            <Image
              width={width}
              height={300}
              source={{uri: i?.url}}
              resizeMode="cover"
              backgroundColor={COLORS.smoke}
            />
          </Block>
        ))}
      </ScrollView>
      <Pressable
        absolute
        bottom={0}
        right={0}
        square={30}
        backgroundColor={COLORS.lightGray}
        alignCenter>
        <Text bold center fontSize={24} color={COLORS.white}>
          ﹢
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -15,
  },
  tabContent: {
    width: Dimensions.get('window').width,
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  tab: {
    paddingHorizontal: 16,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    backgroundColor: 'crimson',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TabViewExample;

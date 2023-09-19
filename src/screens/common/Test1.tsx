import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

const Test1 = ({data}: any) => {
  const _renderItem = ({item, index, separators}: any) => {
    console.log(item);
    return (
      <TouchableHighlight
        // key={item.key}
        onPress={() => console.log('onPress')}
        onShowUnderlay={() =>
          separators.updateProps('', {
            isPress: true,
          })
        }
        onHideUnderlay={() =>
          separators.updateProps('', {
            isPress: false,
          })
        }>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{item.open}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={props => {
          console.log('props', props);
          return (
            <View
              style={{
                height: 5,
                backgroundColor: props.isPress ? 'red' : 'gray',
              }}
            />
          );
        }}
        // horizontal
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={_renderItem}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
        initialNumToRender={5}
      />
    </View>
  );
};

export default Test1;

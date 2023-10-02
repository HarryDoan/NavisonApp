import {icons} from '@assets/index';
import TabViewExample from '@components/common/TabViewExample';
import {Block, Image, Modal, Pressable, Text} from '@components/index';
import {
  Header,
  HorizontalScroll,
  HorizontalScrollImage,
  TravelerOrNonModal,
} from '@components/index';
import actions from '@redux/actions';
import {COLORS} from '@theme/index';
import {width} from '@utils/responsive';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [activeModal, setActiveModal] = useState(false);
  const data = useSelector(state => state.testApi?.data);
  const mockReducers = useSelector(state => state?.mockReducers);
  let outputArray = [];

  // Loop through the object properties
  for (const key in mockReducers) {
    if (Object.hasOwnProperty.call(mockReducers, key)) {
      const item = {
        name: key,
        ...mockReducers[key],
      };
      outputArray.push(item);
    }
  }

  // console.log(outputArray.length);

  console.log('====================================');
  console.log('this is data: ', data);
  console.log('this is data1: ', mockReducers?.category_menu_bar);
  console.log('====================================');

  useEffect(() => {
    dispatch({
      type: actions.TEST_API,
      params: {
        uri_api: 'getHomeScreen',
      },
    });
  }, [dispatch]);

  useEffect(() => {
    data?.forEach(item => {
      dispatch({
        type: actions.GET_HOME_SCREEN,
        params: {
          dataApi: item?.dataApi,
          name: item?.name,
        },
      });
    });
  }, [data]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#EAEFF2',
        paddingVertical: 10,
      }}>
      <Header />

      <FlatList
        // data={[{name: 'toggle_tr'}, {}, {}]}
        data={outputArray}
        keyExtractor={({item, index}: any) => index?.toString()}
        renderItem={({item, index}: any) => {
          return (
            <View key={index.toString()}>
              {item?.name == 'hero_banner' && (
                <TabViewExample key={index} data={item?.data} />
              )}

              {item?.name == 'category_menu_bar' && (
                <HorizontalScroll key={index} data={item?.data} />
              )}

              {item?.name == 'quicklink' && (
                <HorizontalScrollImage key={index} data={item?.data} />
              )}

              {item?.name == 'toggle_tr' && (
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                  colors={['#D31E4B', '#D31E4B', '#6B2369']}>
                  <Block
                    justifyCenter
                    width={width}
                    height={54}
                    paddingHorizontal={15}>
                    <Text fontSize={14} bold color={COLORS.white_text}>
                      You are shopping as a Non-Traveller
                    </Text>
                    <Text fontSize={12} color={COLORS.white_text}>
                      Earliest Pickup: 22/06/23, 02:32 SGT
                    </Text>

                    <Pressable
                      onPress={() => setActiveModal(!activeModal)}
                      absolute
                      right={15}>
                      <Image
                        resizeMode="cover"
                        width={30}
                        height={25}
                        source={icons.ic_eye}
                      />
                    </Pressable>
                  </Block>
                </LinearGradient>
              )}
            </View>
          );
        }}
      />

      {activeModal && (
        <Modal hideModal={() => setActiveModal(false)}>
          <TravelerOrNonModal
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

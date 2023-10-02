import {height} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {Animated, Easing, Pressable, Text, View} from 'react-native';

type TravelerOrNonModalTypes = {
  activeModal: boolean;
  setActiveModal: (e: boolean) => void;
};

const TravelerOrNonModal: React.FC<TravelerOrNonModalTypes> = ({
  activeModal,
  setActiveModal,
}) => {
  const [modalY] = useState(new Animated.Value(0));

  const [isChooseType, setIsChooseType] = useState(false);

  return (
    <View
      style={{
        zIndex: 999,
        position: 'absolute',
        alignSelf: 'center',
        width: '100%',
        height: 400,
        bottom: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        paddingVertical: 15,
      }}>
      <View
        style={{
          width: 30,
          height: 3,
          backgroundColor: 'gray',
          borderRadius: 3,
          alignSelf: 'center',
          marginBottom: 20,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            alignSelf: 'center',
          }}>
          Choose your Shopping Mode
        </Text>
        <Pressable
          style={{
            paddingVertical: 5,
          }}
          onPress={() => setActiveModal(false)}>
          <Text
            style={{
              fontSize: 25,
              color: 'gray',
            }}>
            ×
          </Text>
        </Pressable>
      </View>
      <Text
        style={{
          fontSize: 14,
          color: 'gray',
          alignSelf: 'center',
          paddingVertical: 15,
        }}>
        Select a mode for tailored pricing, promotions & events.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingBottom: 15,
        }}>
        <Pressable
          onPress={() => setIsChooseType(false)}
          style={{
            width: '48%',
            paddingHorizontal: 10,
            paddingVertical: 10,
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: !isChooseType ? 'crimson' : 'white',
            borderWidth: 1,
            borderColor: 'gray',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: !isChooseType ? 'white' : 'black',
            }}>
            Traveller
          </Text>
          <Text
            style={{
              color: !isChooseType ? 'white' : 'black',
            }}>
            Choose this if you are .....
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setIsChooseType(true)}
          style={{
            width: '48%',
            paddingHorizontal: 10,
            paddingVertical: 10,
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: isChooseType ? 'crimson' : 'white',

            borderWidth: 1,
            borderColor: 'gray',
          }}>
          <Text
            style={{
              color: isChooseType ? 'white' : 'black',
              fontWeight: 'bold',
            }}>
            Non-Traveller
          </Text>
          <Text
            style={{
              color: isChooseType ? 'white' : 'black',
            }}>
            Choose this if you are .....
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TravelerOrNonModal;

import {Block, Pressable, Text} from '@components';
import FormInputChangeKey from '@components/common/FormInputChangeKey';
import HeaderCommon from '@components/common/HeaderCommon';
import HeaderTitle from '@components/common/HeaderTitle';
import {bottomRoot, root} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import actions from '@redux/actions';
import {COLORS} from '@theme';
import {height, width} from '@utils/responses';
import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const ChangeKeyScreen = ({route}: any) => {
  const dispatch = useDispatch();

  const currentUserKey = useSelector((state: any) => state.users?.userKey);

  const [userKey, setUserKey] = useState<string>('');
  const [newKey, setNewKey] = useState<string>('');
  const [notice, setNotice] = useState<string>('Successfully Saved');
  const [isShowCurrentKey, setIsShowCurrentKey] = useState<boolean>(false);
  const [isShowNewKey, setIsShowNewKey] = useState<boolean>(false);
  const [isShowModalSaveSuccess, setIsShowModalSaveSuccess] =
    useState<boolean>(false);

  const handleChangeKey = () => {
    if (userKey === currentUserKey && newKey.length === 4) {
      dispatch({
        type: actions.SAVE_NEW_KEY,
        payload: newKey,
      });

      setNotice('Successfully Saved !!');
    } else {
      setNotice(
        'The current key is incorrect, or the new key does not have a length of 4 !!',
      );
    }
    setIsShowModalSaveSuccess(true);
  };

  return (
    <Pressable
      onPress={() => {
        Keyboard.dismiss();
      }}
      flex={1}
      backgroundColor={COLORS.bg_primary}>
      <HeaderTitle />
      <HeaderCommon title={'Change Key'} />
      <FormInputChangeKey
        setIsShowCurrentKey={setIsShowCurrentKey}
        isShowCurrentKey={isShowCurrentKey}
        setIsShowNewKey={setIsShowNewKey}
        isShowNewKey={isShowNewKey}
        setValue_1={setUserKey}
        value_1={userKey}
        placeHolder_value_1="Current Key"
        setValue_2={setNewKey}
        value_2={newKey}
        placeHolder_value_2="New Key"
        handleDone={handleChangeKey}
        titleButton={'Done'}
        is_show_value_2={true}
      />
      {isShowModalSaveSuccess && (
        <Pressable
          backgroundColor={COLORS.gray1}
          justifyCenter
          alignCenter
          absoluteFillObject
          onPress={() => setIsShowModalSaveSuccess(false)}>
          <Pressable
            onPress={() => {}}
            paddingVertical={30}
            paddingHorizontal={15}
            radius={10}
            backgroundColor={COLORS.white}
            width={width - 60}
            height={height * 0.235}
            alignSelfCenter>
            <Text
              center
              numberOfLines={4}
              fontSize={22}
              semiBold
              color={COLORS.black_text}>
              {notice}
            </Text>

            <Block
              row
              width={'100%'}
              justifyCenter
              alignCenter
              absolute
              bottom={15}
              alignSelfCenter>
              <Pressable
                onPress={() => {
                  setIsShowModalSaveSuccess(false);
                  bottomRoot.navigate(Router.HOME_SCREEN);
                }}
                width={width * 0.35}
                height={45}
                justifyCenter
                alignCenter
                radius={5}
                backgroundColor={COLORS.green}>
                <Text color={COLORS.white} fontSize={16} bold>
                  OK
                </Text>
              </Pressable>
            </Block>
          </Pressable>
        </Pressable>
      )}
    </Pressable>
  );
};

export default ChangeKeyScreen;

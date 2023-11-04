import {Block} from '@components';
import HeaderCommon from '@components/common/HeaderCommon';
import HeaderTitle from '@components/common/HeaderTitle';
import {commonRoot, root} from '@navigation/NavigationRef';
import Router from '@navigation/Router';
import {COLORS} from '@theme';
import React, {useRef} from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import {useSelector} from 'react-redux';

const OtpInputScreen = ({route}: any) => {
  const {screen, item} = route?.params;
  const userCode = useSelector((state: any) => state.users?.userKey);
  const defaultCode = '8888';

  let otpInput = useRef<any>(null);

  const checkOTP = (e: string) => {
    if (e === userCode || e === defaultCode) {
      commonRoot.navigate(
        // screen === 'WIFI' ? Router.WIFI_SCREEN : Router.CONFIG_MODE_SCREEN,
        screen === 'WIFI' ? Router.SCAN_WIFI_SCREEN : Router.CONFIG_MODE_SCREEN,
        {item},
      );
    }
  };

  return (
    <Block backgroundColor={COLORS.bg_primary} flex={1}>
      <HeaderTitle />
      <HeaderCommon title={'OTP screen'} />
      <Block paddingHorizontal={15} paddingVertical={15} marginTop={20}>
        <Block
          marginBottom={15}
          borderWidth={3}
          radius={5}
          borderColor={COLORS.primary}
          paddingHorizontal={10}
          paddingVertical={7}>
          <OTPTextInput
            keyboardType="phone-pad"
            handleTextChange={(e: any) => checkOTP(e)}
            autoFocus
            tintColor={COLORS.primary}
            ref={(e: any) => (otpInput = e)}
            textInputStyle={{
              color: COLORS.white_text,
            }}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default OtpInputScreen;
